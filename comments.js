// Create web server
// Create a web server to handle HTTP requests. 
// The server listens on port 3000 and responds to all requests with the message "Hello, world!".

const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello, world!');
});

server.listen(3000);