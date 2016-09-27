// Wait for DOM to load
$(function() {
    $('#itemName').focus();
    todo.repos.items.getAll().forEach(function(itemObj){
      todo.ui.addTodo(itemObj.id, itemObj.name);
    });

    $('#button').click(function() {
        var itemName = $('#itemName').val();
        $('#itemName').val('').focus();
        var itemId = todo.repos.items.add(itemName);
        todo.ui.addTodo(itemId, itemName);
    });

    $('#enter-button').click(function() {
        console.log('click');
        $('.welcome-container').hide();
        $('.todo-container').show();
    });
});
