const { Server } = require("socket.io");

let usernames = {}
let port = process.env.PORT || 3000;

const io = new Server(port, {
    cors: {
        origin: "http://127.0.0.1:8080",
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    const id = socket.id.replace(/[^a-zA-Z0-9]/g, '').replace(/^[0-9]+/, '');;

    socket.on('send', (msgData, type) => {

        if(type === 'text')
            socket.broadcast.emit('msg', msgData, usernames[id], id, 'text');
        else 
            socket.broadcast.emit('msg', msgData, usernames[id], id, 'image');

    })
    
    socket.on('setName', (name) => {
        if(!usernames.hasOwnProperty(socket.id)){
            //console.log("username is new");
            // removing special characters from socket id
            // storing usernames as (key::socket - value::name) pair
            usernames[id] = name;
            socket.broadcast.emit('notification', `${name} Joined the chat`);
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
