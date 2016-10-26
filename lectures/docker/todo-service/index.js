const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('./middleware/cors');
const todoCtr = require('./controllers/routes/todo');
const todoSocket = require('./controllers/socket/todo');

const app = express();
const server = http.Server(app);

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
todoSocket(server);

server.listen(8080, () => {
  console.log('listening on *:8080');
});
