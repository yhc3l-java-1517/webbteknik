todo.repos = {};
todo.repos.items = (function() {
    var items = localStorage.getItem('itemsRepo') ? JSON.parse(localStorage.getItem('itemsRepo')) : [];
    var publicAPI = {};

    function generateId() {
        return +(new Date());
    }

    function save() {
      localStorage.setItem('itemsRepo', JSON.stringify(items));
    }

    publicAPI.getAll = function() {
        return items;
    };

    publicAPI.add = function(itemName) {
        var uniqueID = generateId();
        items.push({
            id: uniqueID,
            name: itemName
        });
        save();
        return uniqueID;
    };

    publicAPI.get = function(id){
      var item = items.filter(function(itemObj){
        return (itemObj.id === id);
      })[0];
      return item;
    };

    publicAPI.remove = function(id) {
      items = items.filter(function(itemObj){
        return (itemObj.id !== id);
      });
      save();
      return items;
    };

    return publicAPI;
})();
