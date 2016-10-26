const events = require('events');
const redis = require('redis');
const server = require('../constants/server.js');


const redisClient = redis.createClient(server.REDIS_OPTIONS);
const redisSub = redis.createClient(server.REDIS_OPTIONS);
const redisPub = redis.createClient(server.REDIS_OPTIONS);
const eventEmitter = new events.EventEmitter();

const getAll = (func) => {
  const todos = [];
  redisClient.smembers('todos', (err, ids) => {
    if (ids.length === 0) {
      func([]);
    }
    ids.forEach((id, index) => {
      redisClient.hgetall(id, (err, data) => {
        if (data) {
          const todo = {
            id: parseInt(id.replace('todo:', ''), 10),
            item: Object.assign({}, data)
          };
          todos.push(todo);
        }
        if (index === ids.length - 1) {
          func(todos);
        }
      });
    });
  });
};

module.exports.getAll = getAll;

module.exports.add = (item, func) => {
  redisClient.incr('next-todo-id', (err, id) => {
    redisClient.HMSET(`todo:${id}`, item);
    redisClient.sadd('todos', `todo:${id}`);
    redisPub.publish('todo-update', 'updated');
    func(id);
  });
};

module.exports.get = (id, func) => {
  redisClient.hgetall(`todo:${id}`, (err, data) => {
    if (data === null) {
      func();
    } else {
      const todo = {
        id: parseInt(id.replace('todo:', ''), 10),
        item: Object.assign({}, data)
      };
      func(todo);
    }
  });
};

module.exports.remove = (id, func) => {
  redisClient.del(`todo:${id}`, (err) => {
    redisClient.srem('todos', `todo:${id}`);
    redisPub.publish('todo-update', 'updated');
    func();
  });
};

module.exports.on = (name, func) => {
  eventEmitter.on(name, func);
};

module.exports.removeListener = (name, func) => {
  eventEmitter.removeListener(name, func);
};

const update = () => {
  getAll((items) => {
    eventEmitter.emit('updated', items);
  });
};

redisSub.on('subscribe', () => {
  redisPub.publish('todo-update', 'updated');
});

redisSub.on('message', (channel, message) => {
  if (channel === 'todo-update' && message === 'updated') {
    update();
  }
});

redisSub.subscribe('todo-update');
