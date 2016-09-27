var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var todoRepo = require('./repo/todo');

// Server static resources first
app.use(express.static(__dirname + '/public'));

// buffer the sent json into req.body
// before continue
app.use(bodyParser.json());

app.get('/todos', function(req, res) {
  res.json(todoRepo.getAll());
});

// :id is a template that will pull out the url component after the /
// and decorate it on req.params
app.get('/todos/:id', function(req, res) {
  var todoItem = todoRepo.get(req.params.id);
  if (todoItem) {
    res.json(todoRepo.get(req.params.id));
  } else {
    res.status(404);
    res.send();
  }
});

app.delete('/todos/:id', function(req, res) {
  todoRepo.remove(req.params.id);
  res.status(200);
  res.send();
});

app.put('/todos/:id', function(req, res) {
  var updateTodo = req.body;
  var id = req.params.id;
  if(todoRepo.get(id)){
    todoRepo.remove(id);
    todoRepo.add(id, updateTodo);
    res.status(200);
    res.send();
  } else {
    todoRepo.add(id, updateTodo);
    res.status(201);
    res.setHeader('Location', '/todos/' + id);
    res.json({
      id: id
    });
    res.send();
  }
});

app.post('/todos', function(req, res) {
  var newTodo = req.body;
  var id = todoRepo.add(newTodo);
  res.setHeader('Location', '/todos/' + id);
  res.status(201);
  res.json({
    id: id
  });
});

app.listen(8080);
console.log('Todo webservice started on port 8080');
