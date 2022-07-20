import { socket } from "./client.js";
import { addMsg, addNotification } from "../view/add.js";
import { updateTyping } from "../view/update.js";

let typing = {};

socket.on('msg', (msgData, name, id, type) => {
    addMsg(msgData, name, id, type);
})

socket.on('typing', (id, name) => {
    if(!typing.hasOwnProperty(id)){
        typing[id] = name;
        updateTyping(typing);
    }
})

socket.on('stoppedTyping', (id, name) => {
    if(typing.hasOwnProperty(id)){
        delete typing[id];
        updateTyping(typing);
    }
})

socket.on('notification', (msg) => {
    addNotification(msg);
});
