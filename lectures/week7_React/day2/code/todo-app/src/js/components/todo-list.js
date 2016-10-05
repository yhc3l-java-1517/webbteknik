import React from 'react';

const TodoItem = (props) => {
  function remove() {
    console.log(`removing  ${props.id}`);
  }
  return (
    <li
      className="list-group-item"
    >
      {props.text}
      <button className="badge" onClick={remove}>X</button>
    </li>
  );
};
TodoItem.propTypes = () => ({
  id: React.PropTypes.number.isRequired,
  text: React.PropTypes.string
});

const TodoList = props => (<ul className="list-group">{
    props.todos.map(todoItem => (
      <TodoItem
        key={todoItem.id}
        id={todoItem.id}
        text={todoItem.text}
      />
    ))
}</ul>);
TodoList.propTypes = () => ({
  todos: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.number,
      text: React.PropTypes.string
    })
  )
});

export default TodoList;
