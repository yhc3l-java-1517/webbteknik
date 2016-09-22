// Wait for DOM to load
$(function(){
  $('#itemName').focus();
  function createRemoveButton (){
    var removeButton = $('<span class="badge">X</span>');
    removeButton.click(function(){
      $(this)
        .parent()
        .remove();
    });
    return removeButton;
  }

  function createListItem (name){
    var listItem = $('<li class="list-group-item">')
                      .text(name)
                      .prepend(createRemoveButton());
    return listItem;
  }

  $('#button').click(function(){
    var item = $('#itemName').val();
    $('#itemName').val('').focus();
    var listItem = createListItem(item);
    $('ul').prepend(listItem);
  });
});
