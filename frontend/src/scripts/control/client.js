import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";

// using live-server
const socket = io('http://127.0.0.1:3000');

socket.on("connect", () => {
  console.log('connected with socket id : 'socket.id);
});

export { socket }
