const { readFile } = require('fs');
const http = require('http');
const path = require('path');
const hostname = '127.0.0.1';
const port = 3000;

const types = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    png: 'image/png',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    gif: 'image/gif',
    json: 'application/json',
    xml: 'application/xml',
  };

const server = http.createServer((req, res) => {
    let fileName = req.url;
    console.log(`${req.method} ${req.url}`);
    let extension = path.extname(req.url).slice(1);
    if(!extension){
        extension = 'html';
        fileName = fileName + '.html'
    }
    console.log(extension);
    
    if(req.url === '/') fileName = 'index.html';

    readFile(path.join(__dirname, fileName), (err, data) => {
        if(err){
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('404: File not found');
        } else {
            res.writeHead(200, { 'Content-Type': types[extension] });
            res.end(data);
        }
    })
})



server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})