//var items = localStorage.getItem('itemsRepo') ? JSON.parse(localStorage.getItem('itemsRepo')) : [];
var items = [];
var publicAPI = {};

function generateId() {
  return +(new Date());
}

function save() {
//  localStorage.setItem('itemsRepo', JSON.stringify(items));
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
  save();
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
  save();
  return items;
};
