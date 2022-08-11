const { Server } = require("socket.io");

let bufferMsg = { msgs: [] }
let usernames = {}
let port = process.env.PORT || 3000;

const io = new Server(port, {cors: {origin: "*"}});

io.on("connection", (socket) => {
    const id = socket.id.replace(/[^a-zA-Z0-9]/g, '').replace(/^[0-9]+/, '');

    socket.on('send', (msgData, type) => {

        if(type === 'text'){
            if(bufferMsg.msgs.length < 30){
                bufferMsg.msgs.push({
                    senderName: usernames[id],
                    senderId: id,
                    content: msgData,
                    type: 'text'
                })
            } else {
                bufferMsg.msgs.shift();
                bufferMsg.msgs.push({
                    senderName: usernames[id],
                    senderId: id,
                    content: msgData,
                    type: 'text'
                })
            }
            socket.broadcast.emit('msg', msgData, usernames[id], id, 'text');

        } else {
            socket.broadcast.emit('msg', msgData, usernames[id], id, 'image');
        }

    })
    
    socket.on('setName', (name) => {
        if(!usernames.hasOwnProperty(socket.id)){
            // removing special characters from socket id
            // storing usernames as (key::socket - value::name) pair
            usernames[id] = name;
            socket.broadcast.emit('notification', `${name} Joined the chat`);

            // sending all the previous messages to newly connected client 
            socket.emit('buffer', JSON.stringify(bufferMsg));
        }
    })

    socket.on('typing', () => {
        socket.broadcast.emit('typing', id, usernames[id]);
    })

    socket.on('stoppedTyping', (name) => {
        socket.broadcast.emit('stoppedTyping', id, usernames[id]);
    })

    socket.on('disconnect', reason => {
        socket.broadcast.emit('stoppedTyping', id, usernames[id]);
        socket.broadcast.emit('notification', `${usernames[id]} left the chat`);
        delete usernames[id];
    })
});
