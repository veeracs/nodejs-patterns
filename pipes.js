//  Pipes - takes data from a read stream and then pipe it into a write stream,
//  so we don't have to manually listen to data events,
//  or write to a write stream

const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`Request made: ${req.url}`)
  res.writeHead(200, {'Content-Type': 'text/plain'});
  let myReadStream = fs.createReadStream('read.txt', 'utf8');
  myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('Now listening on port 3000');