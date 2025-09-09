html_files = []
with open("html_files.txt") as f:
    for line in f:
        path = line.strip().replace("./", "")
        if path != "index.html":
            html_files.append(path)

with open("index.html", "w") as f:
    f.write("<!DOCTYPE html>\n<html><head><title>HTML Files Index</title></head><body>\n")
    f.write("<h1>HTML Files in Repository</h1>\n<ul>\n")
    for html_file in html_files:
        f.write(f'<li><a href="{html_file}">{html_file}</a></li>\n')
    f.write("</ul>\n</body></html>")