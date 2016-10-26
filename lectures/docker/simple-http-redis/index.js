const http = require('http');
const redis = require('redis');
const process = require('process');

const PORT = 8001;
const redisClient = redis.createClient({ host: 'redis', port: 6379 });

const server = http.createServer((req, res) => {
  redisClient.incr('my-counter', (err, nextCounter) => {
    res.end(`pid: ${process.pid.toString()}
         page views: ${nextCounter.toString()}`);
  });
});

server.listen(PORT, () => {
  console.log('Server listening on: http://localhost:%s', PORT);
});
