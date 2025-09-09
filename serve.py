#!/usr/bin/env python3
"""
Simple HTTP server for the Research Papers HTML viewer.
This script serves the static website for viewing HTML research papers.
"""

import http.server
import socketserver
import webbrowser
import os
import sys
from pathlib import Path

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """Custom handler to serve files with proper MIME types."""
    
    def end_headers(self):
        # Add CORS headers for local development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()
    
    def do_GET(self):
        # Handle directory listing for papers folder
        if self.path == '/papers/':
            self.list_papers()
        else:
            super().do_GET()
    
    def list_papers(self):
        """Return JSON list of available papers."""
        papers_dir = Path('./papers')
        if papers_dir.exists():
            papers = [f.name for f in papers_dir.glob('*.html')]
        else:
            papers = []
        
        response = f'["' + '","'.join(papers) + '"]'
        
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        self.wfile.write(response.encode('utf-8'))

def main():
    """Start the HTTP server."""
    PORT = 8000
    
    # Change to the directory containing this script
    script_dir = Path(__file__).parent
    os.chdir(script_dir)
    
    print(f"Research Papers HTML Viewer")
    print(f"============================")
    print(f"Starting server on port {PORT}")
    print(f"Serving from: {script_dir.absolute()}")
    print(f"")
    print(f"Open your browser to: http://localhost:{PORT}")
    print(f"Press Ctrl+C to stop the server")
    print(f"")
    
    try:
        with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
            print(f"Server running at http://localhost:{PORT}/")
            
            # Try to open browser automatically
            try:
                webbrowser.open(f'http://localhost:{PORT}')
                print("Browser opened automatically")
            except Exception as e:
                print(f"Could not open browser automatically: {e}")
                print("Please open your browser manually")
            
            print("\nServer ready. Waiting for requests...")
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\nServer stopped by user")
        sys.exit(0)
    except OSError as e:
        if e.errno == 48:  # Address already in use
            print(f"Error: Port {PORT} is already in use.")
            print("Try using a different port or stop the existing server.")
            sys.exit(1)
        else:
            print(f"Error starting server: {e}")
            sys.exit(1)

if __name__ == '__main__':
    main()