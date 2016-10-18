import React from 'react';

const TodoItem = (props) => {
  function handleClick() {
    props.onRemove(props.id);
  }
  return (
    <li
      className="list-group-item"
    >
      {props.text}
      <button className="badge" onClick={handleClick}>X</button>
    </li>
  );
};
TodoItem.propTypes = () => ({
  id: React.PropTypes.number.isRequired,
  text: React.PropTypes.string,
  onRemove: React.PropTypes.func
});

const TodoList = props => (<ul className="list-group">{
    props.todos.map(todoItem => (
      <TodoItem
        key={todoItem.id}
        id={todoItem.id}
        text={todoItem.text}
        onRemove={props.onRemove}
      />
  )).reverse()
}</ul>);
TodoList.propTypes = () => ({
  todos: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.number,
      text: React.PropTypes.string
    })
  ),
  onRemove: React.PropTypes.func
});

export default TodoList;
