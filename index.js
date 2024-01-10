const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const path = require('path');
const { Server } = require('socket.io');
const io = new Server(server);

app.use(express.static(path.resolve('./public')));


// Socket.io.....

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});


// Routes....
app.get('/', function (req, res) {
    res.sendFile('public/index.html');
});


server.listen(3000, () => {
    console.log('listening on *:3000');
});