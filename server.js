var http = require('http');
var express = require('express');
var socket_io = require('socket.io');

var app = express();
app.use(express.static('public'));

var server = http.Server(app);
var io = socket_io(server);

io.on('connection', function (socket) {
    //socket.broadcast.emit('status', 'A new user has logged in'); to everyone but the sender
    //io.sockets.emit('user_count', users); to all
        
    socket.on('draw', function(draw) {
        socket.broadcast.emit('draw', draw);
    });
    /*
    socket.on('message', function(message) {
        console.log('Received message:', message);
        socket.broadcast.emit('message', message);
        socket.emit('user_count', users);
    });
    
    socket.on('disconnect', function () {
        users--;
        socket.broadcast.emit('status', 'A user has logged out');
        io.sockets.emit('user_count', users);
    });*/
 
});

server.listen(8080);
