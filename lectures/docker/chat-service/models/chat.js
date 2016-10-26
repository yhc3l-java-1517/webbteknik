const events = require('events');
const redis = require('redis');
const server = require('../constants/server.js');

const redisClient = redis.createClient(server.REDIS_OPTIONS);
const redisSub = redis.createClient(server.REDIS_OPTIONS);
const redisPub = redis.createClient(server.REDIS_OPTIONS);
const eventEmitter = new events.EventEmitter();

const getAll = (func) => {
  redisClient.zrange('posts', 0, -1, (err, posts) => {
    if (posts.length === 0) {
      func([]);
    } else {
      func(posts.map(post => JSON.parse(post)));
    }
  });
};

const getAfter = (from, func) => {
  redisClient.zrangebyscore('posts', from, '+inf', (err, posts) => {
    if (posts.length === 0) {
      func([]);
    } else {
      func(posts.map(post => JSON.parse(post)));
    }
  });
};

const add = (post) => {
  redisClient.incr('next-post-id', (err, id) => {
    const newPost = Object.assign({}, post, { id });
    redisClient.zadd('posts', id, JSON.stringify(newPost), () => {
      redisPub.publish('post-added', 'updated');
    });
  });
};

const update = () => {
  eventEmitter.emit('updated');
};

redisSub.on('subscribe', () => {
  redisPub.publish('post-added', 'updated');
});

redisSub.on('message', (channel, message) => {
  if (channel === 'post-added' && message === 'updated') {
    update();
  }
});

redisSub.subscribe('post-added');

module.exports.getAll = getAll;
module.exports.getAfter = getAfter;
module.exports.add = add;
module.exports.on = (name, func) => {
  eventEmitter.on(name, func);
};
module.exports.removeListener = (name, func) => {
  eventEmitter.removeListener(name, func);
};
