const Storage = require('dom-storage');
const events = require('events');

const localStorage = new Storage('./db.json', { strict: true, ws: '  ' });
let items = localStorage.getItem('itemsRepo') ? JSON.parse(localStorage.getItem('itemsRepo')) : [];
const eventEmitter = new events.EventEmitter();

const generateId = () => +(new Date());

const update = () => {
  localStorage.setItem('itemsRepo', JSON.stringify(items));
  eventEmitter.emit('updated', items);
};

module.exports.getAll = () => items;

module.exports.add = (item) => {
  const uniqueID = generateId();
  items.push({
    id: uniqueID,
    item
  });
  update();
  return uniqueID;
};

module.exports.get = (id) => {
  const intId = parseInt(id, 10);
  const item = items.filter(itemObj => (itemObj.id === intId))[0];
  return item;
};

module.exports.remove = (id) => {
  const intId = parseInt(id, 10);
  items = items.filter(itemObj => (itemObj.id !== intId));
  update();
  return items;
};

module.exports.on = (name, func) => {
  eventEmitter.on(name, func);
};

module.exports.removeListener = (name, func) => {
  eventEmitter.removeListener(name, func);
};
