var todoModel = require('../models/todo');

module.exports.getAll = function(req, res) {
  res.json(todoModel.getAll());
};

module.exports.get = function(req, res) {
  var todoItem = todoModel.get(req.params.id);
  if (todoItem) {
    res.json(todoModel.get(req.params.id));
  } else {
    res.status(404);
    res.send();
  }
}

module.exports.remove = function(req, res) {
  todoModel.remove(req.params.id);
  res.status(200);
  res.send();
};

module.exports.update = function(req, res) {
  var updateTodo = req.body;
  var id = req.params.id;
  if (todoModel.get(id)) {
    todoModel.remove(id);
    todoModel.add(id, updateTodo);
    res.status(200);
    res.send();
  } else {
    todoModel.add(id, updateTodo);
    res.status(201);
    res.setHeader('Location', '/todos/' + id);
    res.json({
      id: id
    });
    res.send();
  }
};

module.exports.add = function(req, res) {
  var newTodo = req.body;
  var id = todoModel.add(newTodo);
  res.setHeader('Location', '/todos/' + id);
  res.status(201);
  res.json({
    id: id
  });
};
