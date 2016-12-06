const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  let readStream = fs.createReadStream('index.html', 'utf8');
  readStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('Now listening on port 3000');