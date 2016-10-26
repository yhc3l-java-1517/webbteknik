const socketIo = require('socket.io');

// const port = 1234 + process.env.NODE_APP_INSTANCE;
const port = 8080;
const chat = require('./models/chat');

/* Socket */
const io = socketIo(port);
io.on('connection', (socket) => {
  chat.getAll((items) => {
    socket.emit('new-posts', items);
  });

  socket.on('send-posts-from', (id) => {
    const nextId = id + 1;
    chat.getAfter(nextId, (posts) => {
      socket.emit('new-posts', posts);
    });
  });

  socket.on('add-post', (post) => {
    chat.add(post);
  });
});

// Listen to model changes and broadcast to everyone
chat.on('updated', () => {
  io.sockets.emit('chat-update');
});

console.log(`listening on *:${port}`);
