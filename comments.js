// Create web server

// Import the necessary modules
const http = require('http');
const port = 3000; // You can choose any available port

// Create a simple HTTP server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Send a response to the client
  res.end('Hello, World!\n');
});

// Listen on the specified port
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
