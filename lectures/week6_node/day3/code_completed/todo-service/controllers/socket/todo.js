var todoModel = require('../models/todo');

module.exports = function(socket){
  function onChange(items){
    socket.emit('todo-update', items);
  }

  onChange(todoModel.getAll());

  todoModel.on('updated', onChange);

  socket.on('disconnect', function() {
      todoModel.removeListener('updated', onChange);
   });
};
