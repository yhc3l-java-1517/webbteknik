const http = require('http');

const PORT = 8000;
let counter = 0;

const server = http.createServer((req, res) => {
  counter += 1;
  res.end(counter.toString());
});

server.listen(PORT, () => {
  console.log('Server listening on: http://localhost:%s', PORT);
});
