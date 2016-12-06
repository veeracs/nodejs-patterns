const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hey Ninja!');
});

server.listen(3000, '127.0.0.1');
console.log('Now listening on port 3000');