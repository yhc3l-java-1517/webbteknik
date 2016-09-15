var dataStore = (function(){
  var stores = {};
  var publicApi = {};
  function createId(){
    return (new Date()).getUTCMilliseconds();
  }
  publicApi.add = function(storeName, item){
    if(stores[storeName] === undefined){
      stores[storeName] = {};
    }
    var currentId = createId();
    stores[storeName][currentId] = item;
    return currentId;
  };

  publicApi.update = function(storeName, id, item){
    if(stores[storeName] === undefined){
      throw new Error('Store does not exist');
    } else {
      stores[storeName][id] = item;
    }
  };

  publicApi.remove = function(storeName, id){
    if(stores[storeName] === undefined){
      throw new Error('Store does not exist');
    } else {
      delete stores[storeName][id];
    }
  };

  publicApi.get = function(storeName, id){
    if(stores[storeName] === undefined){
      return null;
    } else if(id === undefined){
      var allItems = [];
      var currentItem;
      for(var id in stores[storeName]){
        if(stores[storeName].hasOwnProperty(id)){
          currentItem = stores[storeName][id];
          currentItem._id = id;
          allItems.push(currentItem);
        }
      }
      return allItems;
    } else {
      return (stores[storeName][id]) ? stores[storeName][id] : null;
    }
  };

  return publicApi;
})();
