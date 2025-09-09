class ResearchPaperViewer {
    constructor() {
        this.fileList = document.getElementById('file-list');
        this.contentArea = document.getElementById('content-area');
        this.currentFile = null;
        this.papers = [];
        
        this.init();
    }
    
    async init() {
        await this.loadFileList();
        this.bindEvents();
    }
    
    async loadFileList() {
        try {
            // For a static site, we'll maintain a list of papers
            // In a real server environment, this could be dynamically generated
            this.papers = await this.getPapersList();
            this.renderFileList();
        } catch (error) {
            console.error('Error loading file list:', error);
            this.showError('Failed to load paper list');
        }
    }
    
    async getPapersList() {
        // This simulates getting a list of papers
        // In a real implementation, this would fetch from a server endpoint
        const papersList = [
            'sample-paper-1.html',
            'sample-paper-2.html',
            'research-methodology.html'
        ];
        
        // Check if files exist by trying to fetch them
        const existingPapers = [];
        for (const paper of papersList) {
            try {
                const response = await fetch(`papers/${paper}`, { method: 'HEAD' });
                if (response.ok) {
                    existingPapers.push(paper);
                }
            } catch (error) {
                // File doesn't exist, skip it
            }
        }
        
        return existingPapers;
    }
    
    renderFileList() {
        if (this.papers.length === 0) {
            this.fileList.innerHTML = `
                <div class="file-item" style="cursor: default; opacity: 0.6;">
                    <em>No papers found</em><br>
                    <small>Add HTML files to the papers/ directory</small>
                </div>
            `;
            return;
        }
        
        this.fileList.innerHTML = '';
        
        this.papers.forEach(filename => {
            const fileItem = document.createElement('div');
            fileItem.className = 'file-item';
            fileItem.textContent = this.formatFilename(filename);
            fileItem.dataset.filename = filename;
            
            fileItem.addEventListener('click', () => this.loadPaper(filename));
            
            this.fileList.appendChild(fileItem);
        });
    }
    
    formatFilename(filename) {
        // Convert filename to a more readable format
        return filename
            .replace('.html', '')
            .replace(/-/g, ' ')
            .replace(/\b\w/g, l => l.toUpperCase());
    }
    
    async loadPaper(filename) {
        try {
            // Update active state
            document.querySelectorAll('.file-item').forEach(item => {
                item.classList.remove('active');
            });
            
            const activeItem = document.querySelector(`[data-filename="${filename}"]`);
            if (activeItem) {
                activeItem.classList.add('active');
            }
            
            // Show loading state
            this.contentArea.innerHTML = '<div class="loading">Loading paper...</div>';
            
            // Fetch and display the paper
            const response = await fetch(`papers/${filename}`);
            
            if (!response.ok) {
                throw new Error(`Failed to load paper: ${response.statusText}`);
            }
            
            const content = await response.text();
            
            // Create a container for the paper content
            const paperContainer = document.createElement('div');
            paperContainer.className = 'paper-content';
            paperContainer.innerHTML = content;
            
            // Replace the content area
            this.contentArea.innerHTML = '';
            this.contentArea.appendChild(paperContainer);
            
            this.currentFile = filename;
            
            // Scroll to top
            this.contentArea.scrollTop = 0;
            
        } catch (error) {
            console.error('Error loading paper:', error);
            this.showError(`Failed to load paper: ${filename}`);
        }
    }
    
    showError(message) {
        this.contentArea.innerHTML = `
            <div class="error">
                <strong>Error:</strong> ${message}
            </div>
        `;
    }
    
    bindEvents() {
        // Handle keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                e.preventDefault();
                this.navigateFiles(e.key === 'ArrowUp' ? -1 : 1);
            }
        });
    }
    
    navigateFiles(direction) {
        if (this.papers.length === 0) return;
        
        let currentIndex = this.papers.indexOf(this.currentFile);
        if (currentIndex === -1) currentIndex = 0;
        
        const newIndex = (currentIndex + direction + this.papers.length) % this.papers.length;
        this.loadPaper(this.papers[newIndex]);
    }
}

// Initialize the viewer when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new ResearchPaperViewer();
});

// Add some utility functions for better UX
document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling for internal links
    document.addEventListener('click', (e) => {
        if (e.target.matches('a[href^="#"]')) {
            e.preventDefault();
            const target = document.querySelector(e.target.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
    
    // Add copy functionality for code blocks
    document.addEventListener('click', (e) => {
        if (e.target.matches('pre, code')) {
            navigator.clipboard.writeText(e.target.textContent).then(() => {
                // Could add a toast notification here
                console.log('Code copied to clipboard');
            });
        }
    });
});