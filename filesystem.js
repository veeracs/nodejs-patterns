const fs = require('fs');

//  create a directory
fs.mkdir('stuff', () => {
  //  read from a text file
  fs.readFile('read.txt', 'utf8', (err, data) => {
    //  write to a text file within the directory
    fs.writeFile('stuff/write.txt', data);
  });
});

//  remove a directory
fs.unlink('stuff/write.txt', () => {
  fs.rmdir('stuff');
});