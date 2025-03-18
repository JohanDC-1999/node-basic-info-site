const fs = require('fs');
const http = require('http');
const path = require('path');

const PORT = 8080;

// Create the server
const server = http.createServer((req, res) => {
    // Log the request information
    console.log(`${req.method} ${req.url}`);

    // Set the filename to request url or index.html if no page specified
    let fileName = req.url === '/' ? 'index.html' : req.url;

    // Append .html if missing
    if(fileName.indexOf('.html') === -1) fileName+='.html';

    // Read the file - use .join to find the correct location in directory
    fs.readFile(path.join(__dirname, fileName), (err, data) => {
        if(err){
            // If page requested not found - show the 404.html page
            fs.readFile(path.join(__dirname, '404.html'), (err, data) => {
                if(err){
                    res.writeHead(404, { 'Content-Type' : 'text/plain' });
                    res.end('404: File not found (and 404.html missing!)');
                } else {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(data);
                }
            })
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    })
})

// Listen on the specified port
server.listen(PORT, () => {
    console.log(`Server started → Listening on port ${PORT}`);
})
