const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(`Request made: ${req.url}`);
  if (req.url === '/home' || req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream('index.html').pipe(res);
  } else if(req.url === '/contact') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream('contact.html').pipe(res);
  } else if (req.url === '/api/ninjas') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    const ninjas = [{'name': 'chandu', 'job': 'ninja'}, {'name': 'rayal', 'job': 'ninja'}];
    res.end(JSON.stringify(ninjas));
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream('404.html').pipe(res);
  }
});

server.listen('3002', '127.0.0.1');
console.log('Listening on port 3002');