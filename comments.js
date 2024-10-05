// Create web server
// Import the http module
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response header and status code
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Send the response body
  res.end('Hello World\n');
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server running on port 3000');
});