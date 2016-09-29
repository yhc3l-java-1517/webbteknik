var Storage = require('dom-storage');
var localStorage = new Storage('./db.json', { strict: true, ws: '  ' });

var items = localStorage.getItem('itemsRepo') ? JSON.parse(localStorage.getItem('itemsRepo')) : [];
var events = require('events');
var eventEmitter = new events.EventEmitter();
var publicAPI = {};

function generateId() {
  return +(new Date());
}

function update() {
  localStorage.setItem('itemsRepo', JSON.stringify(items));
  eventEmitter.emit('updated', items);
}

module.exports.getAll = function() {
  return items;
};

module.exports.add = function(id, item) {
  var uniqueID;

  if(!item){
    item = id;
    uniqueID = generateId();
  } else {
    uniqueID = id;
  }

  items.push({
    id: uniqueID,
    item: item
  });
  update();
  return uniqueID;
};

module.exports.get = function(id) {
  id = parseInt(id);
  var item = items.filter(function(itemObj) {
    return (itemObj.id === id);
  })[0];
  return item;
};

module.exports.remove = function(id) {
  id = parseInt(id);
  items = items.filter(function(itemObj) {
    return (itemObj.id !== id);
  });
  update();
  return items;
};

module.exports.on = function(name, func){
  eventEmitter.on(name, func);
};

module.exports.removeListener = function(name, func){
  eventEmitter.removeListener(name, func);
};
