const EventEmitter = require('events');

class Person extends EventEmitter {
  constructor() {
    super();
  }
  speak(data) {
    //  emit the data event
    this.emit('data', data);
  }
}

const dave = new Person();
dave.on('data', (data) => {
  console.log(`Data received: ${data}`);
});

dave.speak('ES6 is awesome!');