// node server.js
const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);
  res.statusCode = 200;
  res.end('<h1>Hello World</h1>');
  // res.writeHead(200, { 'Content-Type': 'text/plain' });
  // res.end('Hello World\n');
})

server.listen(3001, () => {
  console.log('Server running at http://localhost:3001/');
})