const { io } = require('socket.io-client');

// using live-server
//const socket = io('http://127.0.0.1:3000');
const socket = io('https://labchord.herokuapp.com/');

socket.on("connect", () => {
  console.log('connected with socket id : ' + socket.id);
});

export { socket };
