var io = require('socket.io')();


io.on('connection', function (socket) {
    console.log('Client connected to socket.io!');
    socket.on('add-circle', function (data) {
        io.emit('add-circle', data);
    });
});

module.exports = io;