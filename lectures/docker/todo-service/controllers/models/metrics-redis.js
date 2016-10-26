const redis = require('redis');
const server = require('../constants/server.js');

const redisClient = redis.createClient(server.REDIS_OPTIONS);
const redisPub = redis.createClient(server.REDIS_OPTIONS);

module.exports.update = (metrics) => {
  redisClient.incr(`socket-metric-counter:${metrics.hostname}:${metrics.pid}`, (err, id) => {
    redisClient.HMSET(`server-metrics:socket:${metrics.hostname}:${metrics.pid}:${id}`, metrics);
    redisClient.sadd('server-metrics:socket', `socket-metric:${metrics.os.hostname}:${metrics.process.pid}:${id}`);
    redisClient.sadd('running-server-processes', `${metrics.hostname}:${metrics.pid}`);
    redisPub.publish('metrics-update', 'updated');
  });
};

module.exports.removeProcess = (info) => {
  redisClient.srem('running-server-processes', ${info.hostname}:${info.pid});
};

module.exports.socketIncr = () => {
  redisClient.incr('todo-socket-count');
};

module.exports.socketDecr = () => {
  redisClient.decr('todo-socket-count');
};
