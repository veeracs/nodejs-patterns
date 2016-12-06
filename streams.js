const fs = require('fs');

let myReadStream = fs.createReadStream('read.txt', 'utf8');
let myWriteStream = fs.createWriteStream('write.txt');

myReadStream.on('data', (chunk) => {
  console.log('new chunk received...');
  myWriteStream.write(chunk);
});