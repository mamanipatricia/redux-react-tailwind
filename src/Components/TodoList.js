import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = ({ myTodos, toggleTodo }) => (
  <ul>
    {myTodos.map((todo) => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
);

TodoList.propTypes = {
  myTodos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default TodoList;
