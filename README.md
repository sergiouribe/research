# Research Papers HTML Viewer

A simple website for viewing and browsing HTML research papers.

## Features

- Clean, academic-style interface for viewing HTML research papers
- File browser with automatic paper detection
- Responsive design that works on desktop and mobile
- Keyboard navigation support (arrow keys to navigate between papers)
- Sample research papers included for demonstration

## Usage

### Starting the Server

1. **Using Python (Recommended)**:
   ```bash
   python3 serve.py
   ```
   This will start a local server on `http://localhost:8000` and automatically open your browser.

2. **Using Python's built-in server**:
   ```bash
   python3 -m http.server 8000
   ```
   Then open `http://localhost:8000` in your browser.

### Adding Your Own Papers

1. Create HTML files in the `papers/` directory
2. The website will automatically detect and list them
3. Refresh the browser to see new papers

### HTML Paper Format

Your HTML research papers should be structured with standard HTML elements:

```html
<h1>Paper Title</h1>
<h2>Abstract</h2>
<p>Your abstract text...</p>
<h2>Introduction</h2>
<p>Introduction content...</p>
<!-- Additional sections -->
```

The viewer automatically applies academic styling to:
- Headers (h1, h2, h3)
- Paragraphs and text formatting
- Code blocks and inline code
- Blockquotes
- Lists and tables

## Sample Papers

Three sample research papers are included:
- **Machine Learning in Healthcare** - Explores AI applications in medical diagnosis
- **Climate Change and Biodiversity** - Global perspective on ecosystem impacts  
- **Research Methodology in Digital Humanities** - Comprehensive methodology guide

## File Structure

```
├── index.html          # Main website interface
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── serve.py            # Python server script
├── papers/             # Directory for HTML research papers
│   ├── sample-paper-1.html
│   ├── sample-paper-2.html
│   └── research-methodology.html
└── README.md           # This file
```

## Browser Compatibility

The website works with all modern browsers including:
- Chrome/Chromium
- Firefox
- Safari
- Edge

## Keyboard Shortcuts

- **↑/↓ Arrow Keys**: Navigate between papers
- **Click**: Select and view a paper

## Customization

You can modify the appearance by editing:
- `styles.css` for visual styling
- `script.js` for functionality
- `index.html` for page structure

## License

Open source - feel free to modify and use for your research projects.
