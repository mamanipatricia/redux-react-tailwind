import React from "react";
import PropTypes from "prop-types";

const Todo = ({ onClick, completed:completedd, text }) => (
  <li
    onClick={onClick}
    className={`${completedd ? "line-through" : "no-underline"}`}
  >
    {text}
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
