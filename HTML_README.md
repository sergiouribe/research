# HTML Files Structure

This directory contains HTML files for the Research Papers Repository website.

## Files Overview

### Main Pages
- **index.html** - Main landing page showcasing recent research papers
- **publications.html** - Complete list of all publications with filtering capability
- **about.html** - Information about the repository and research areas
- **styles.css** - CSS stylesheet for consistent design across all pages

### Research Papers
Located in the `papers/` directory:
- **sample-paper-1.html** - "Machine Learning Applications in Healthcare"
- **sample-paper-2.html** - "Sustainable Energy Systems: A Comprehensive Review" 
- **sample-paper-3.html** - "Data Privacy in the Digital Age"

## Features

### Responsive Design
- Mobile-friendly layout that adapts to different screen sizes
- Professional academic styling with clean typography
- Consistent navigation across all pages

### Interactive Elements
- **Publications Filtering**: Filter papers by category (Machine Learning, Energy, Privacy)
- **Navigation Links**: Easy navigation between pages and papers
- **Paper Cards**: Hover effects and clickable elements for better UX

### Academic Formatting
- Proper academic paper structure with abstracts, methodology, results, and references
- Professional citation formatting
- Clear section headings and structured content

## Usage

### Serving the Files
To view the HTML files locally, you can:

1. **Using Python 3:**
   ```bash
   python3 -m http.server 8080
   ```

2. **Using Node.js:**
   ```bash
   npx http-server .
   ```

3. **Using PHP:**
   ```bash
   php -S localhost:8080
   ```

Then open `http://localhost:8080` in your web browser.

### GitHub Pages
These files are ready to be deployed on GitHub Pages. Simply enable Pages in the repository settings and point it to the main branch.

## File Structure
```
/
├── index.html          # Main landing page
├── publications.html   # Publications listing with filters
├── about.html         # About page
├── styles.css         # Main stylesheet
├── papers/            # Research papers directory
│   ├── sample-paper-1.html
│   ├── sample-paper-2.html
│   └── sample-paper-3.html
└── HTML_README.md     # This file
```

## Customization

### Adding New Papers
1. Create a new HTML file in the `papers/` directory
2. Follow the structure of existing papers
3. Update `index.html` and `publications.html` to include the new paper
4. Add appropriate filtering category if needed

### Styling Changes
- Modify `styles.css` to change colors, fonts, or layout
- The CSS uses CSS custom properties for easy theming
- Responsive breakpoints are defined for mobile devices

### Navigation
- Update navigation links in the header of each HTML file
- Ensure relative paths are correct for files in subdirectories

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Internet Explorer 11+ (with potential minor styling differences)
- Mobile browsers on iOS and Android