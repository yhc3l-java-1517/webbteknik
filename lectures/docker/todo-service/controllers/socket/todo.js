const todoModel = require('../models/todo-redis');
const socketIO = require('socket.io');

module.exports = (http) => {
  const io = socketIO(http);
  io.on('connection', (socket) => {
    todoModel.getAll((items) => {
      socket.emit('todo-update', items);
    });
  });

  // Listen to model changes and broadcast to everyone
  todoModel.on('updated', (items) => {
    console.log('updating');
    io.sockets.emit('todo-update', items);
  });
};
