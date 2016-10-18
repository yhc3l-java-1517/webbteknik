var todoModel = require('../models/todo');

module.exports = function(http) {
  var io = require('socket.io')(http);
  io.on('connection', function (socket) {
    socket.emit('todo-update', todoModel.getAll());
  });

  // Listen to model changes and broadcast to everyone
  todoModel.on('updated', function updateClients(items){
    io.sockets.emit('todo-update', items);
  });
};
