var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');
var cors = require('./middleware/cors');
var todoCtr = require('./controllers/routes/todo');
var todoSocket = require('./controllers/socket/todo')

/* Middleware */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors);

/* Routing */
app.get('/v1/todos', todoCtr.getAll);
app.get('/v1/todos/:id', todoCtr.get);
app.delete('/v1/todos/:id', todoCtr.remove);
app.put('/v1/todos/:id', todoCtr.update);
app.post('/v1/todos', todoCtr.add);

/* Socket */
io.on('connection', todoSocket);

http.listen(8081, function(){
  console.log('listening on *:8081');
});
