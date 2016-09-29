var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('./middleware/cors');
var todoCtr = require('./controllers/routes/todo');

// buffer the sent json into req.body
// before continue
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors);

app.get('/todos', todoCtr.getAll);
app.get('/todos/:id', todoCtr.get);
app.delete('/todos/:id', todoCtr.remove);
app.put('/todos/:id', todoCtr.update);
app.post('/todos', todoCtr.add);

app.listen(8081);
console.log('Todo webservice started on port 8081');
