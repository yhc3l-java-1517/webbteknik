todo.repos = {};
todo.repos.items = (function() {
  var publicAPI = {};
  var URL = window.location.protocol + '//' + window.location.hostname + ':8081/v1';

  publicAPI.getAll = function(func) {
    $.ajax({
      url: URL + '/todos',
      type: 'GET',
      dataType: 'json',
      success: function(json, status, xhr) {
        console.log('Status: ' + status);
        console.log('Xhr: ' + xhr);

        func(json);
      },
      error: function(xhr, status, error) {
        console.error('failed to get all todods, status code:' + status);
      }
    });
  };

  publicAPI.add = function(item, func) {
    $.ajax({
      url: URL + '/todos',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(item),
      dataType: 'json',
      success: function(json) {
        if (func) {
          func(json.id);
        }
      },
      error: function(xhr, status, error) {
        console.error('failed to add todos, status code:' + status);
      }
    });
  };

  publicAPI.remove = function(id) {
    $.ajax({
      url: URL + '/todos/' + id,
      type: 'DELETE',
      error: function(xhr, status, error) {
        console.error('failed to delete todo, status code:' + status);
      }
    });
  };

  return publicAPI;
})();
