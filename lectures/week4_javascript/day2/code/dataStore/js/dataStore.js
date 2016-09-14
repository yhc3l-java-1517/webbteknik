var dataStore = (function(){
  var stores = {};
  function getUniqueId (){
    return new Date().getUTCMilliseconds();
  }

  var publicApi = {};
  publicApi.add = function(store, value){
    if(stores[store] === undefined){
      stores[store] = {};
    }
    if(typeof value === 'object'){
      stores[store][getUniqueId()] = value;
    } else {
      throw new TypeError('Added value must be an Object');
    }
  };
  publicApi.update = function(store, id, value){
    if(stores[store] === undefined){
      throw new Error('Store not found')
    } else {
      stores[store][id] = value;
    }
  };
  publicApi.remove = function(store,id){
    if(stores[store] === undefined){
      throw new Error('Store not found')
    } else {
      delete stores[store][id];
    }
  };
  publicApi.get = function(store, id){
    if(stores[store] === undefined){
      return null;
    } else if(id === undefined){
      var allItems = [];
      var currentValue;
      for(var id in stores[store]){
        if(stores[store].hasOwnProperty(id)){
            currentValue = stores[store][id];
            currentValue._id = id;
            allItems.push(currentValue);
        }
      }
      return allItems;
    } else {
      return (stores[store][id])? stores[store][id] : null;
    }
  };
  return publicApi;
})();
