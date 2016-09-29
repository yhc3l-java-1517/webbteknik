// Wait for DOM to load
$(function() {
    $('#itemName').focus();
    todo.repos.items.getAll(function(json){
      json.forEach(function(obj){
        todo.ui.addTodo(obj.id, obj.item.name);
      });
    });

    $('#button').click(function() {
        var itemName = $('#itemName').val();
        $('#itemName').val('').focus();
        var itemId = todo.repos.items.add({ name: itemName}, function(id){
          todo.ui.addTodo(id, itemName);
        });
    });

    $('#enter-button').click(function() {
        console.log('click');
        $('.welcome-container').hide();
        $('.todo-container').show();
    });
});
