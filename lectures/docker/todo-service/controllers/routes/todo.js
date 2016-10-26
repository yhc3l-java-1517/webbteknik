const todoModel = require('../models/todo-redis');

module.exports.getAll = (req, res) => {
  todoModel.getAll((data) => {
    res.json(data);
  });
};

module.exports.get = (req, res) => {
  todoModel.get(req.params.id, (item) => {
    if (item) {
      res.json(item);
    } else {
      res.status(404);
      res.send();
    }
  });
  /*
  */
};

module.exports.remove = (req, res) => {
  todoModel.remove(req.params.id, () => {
    res.status(200);
    res.send();
  });
};

module.exports.update = (req, res) => {
  const updateTodo = req.body;
  const id = req.params.id;

  if (todoModel.get(id)) {
    todoModel.remove(id);
    todoModel.add(id, updateTodo);
    res.status(200);
    res.send();
  } else {
    todoModel.add(id, updateTodo);
    res.status(201);
    res.setHeader('Location', `/todos/${id}`);
    res.json({
      id
    });
    res.send();
  }
};

module.exports.add = (req, res) => {
  const newTodo = req.body;
  todoModel.add(newTodo, (id) => {
    res.setHeader('Location', `/todos/${id}`);
    res.status(201);
    res.json({
      id
    });
  });
};
