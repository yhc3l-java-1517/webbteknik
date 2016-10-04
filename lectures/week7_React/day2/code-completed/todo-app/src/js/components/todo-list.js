import React from 'react';

const TodoItem = (props) => {
  const remove = () => {
    props.onRemove(props.id);
  };
  return (<li className="list-group-item">
    {props.text}
    <button className="badge" onClick={remove} >X< /button>
  < /li>);
};

TodoItem.propTypes = {
  text: React.PropTypes.string,
  id: React.PropTypes.number,
  onRemove: React.PropTypes.func
};

const TodoList = props => (<ul className="list-group">
  {props.todos.map(todoItem => (
    <TodoItem
      key={todoItem.id}
      id={todoItem.id}
      text={todoItem.item.name}
      onRemove={props.onRemove}
    />
  )).reverse()}
</ul>);

TodoList.propTypes = () => ({
  todos: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number,
    text: React.PropTypes.string
  }))
});
export default TodoList;
