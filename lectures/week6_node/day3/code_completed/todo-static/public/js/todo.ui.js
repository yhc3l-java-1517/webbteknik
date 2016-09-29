todo.ui = {};
todo.ui.addTodo = (function(){
  function createRemoveButton(id) {
      var removeButton = $('<span class="badge">X</span>');
      removeButton.click(function() {
          $(this)
              .parent()
              .remove();
          todo.repos.items.remove(id);
      });
      return removeButton;
  }

  function createListItem(id, name) {
     var listItem = $('<li class="list-group-item">')
         .text(name)
         .prepend(createRemoveButton(id));
     return listItem;
  }

  return function(id, name){
    var listItem = createListItem(id, name);
    $('ul').prepend(listItem);
  };
})();

todo.ui.addAllTodos = function(todos){
  $('ul').children().remove();
  todos.forEach(function(aTodo) {
    todo.ui.addTodo(aTodo.id, aTodo.item.name);
  });
};
