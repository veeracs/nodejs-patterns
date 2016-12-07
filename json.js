const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(`Request made: ${req.url}`);
  res.writeHead(200, {'Content-Type': 'application/json'});
  const myObj = {
    name: 'chandra',
    job: 'ninja'
  };
  res.end(JSON.stringify(myObj));
});

server.listen(3001, '127.0.0.1');