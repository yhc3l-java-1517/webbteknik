// Wait for DOM to load
$(function() {

  var socket = io.connect('http://localhost:8081');
  socket.on('todo-update', function(todos) {
    todo.ui.addAllTodos(todos);
  });


  todo.repos.items.getAll(function(todos) {
    todo.ui.addAllTodos(todos);
  });

  $('#itemName').focus();

  $('#itemName').keypress(function (e) {
    if (e.which == 13) {
      addData();
      return false;
    }
  });

  function addData() {
    var itemName = $('#itemName').val();
    $('#itemName').val('').focus();
    var itemId = todo.repos.items.add({
      name: itemName
    });
  }

  $('#button').click(addData);
});
