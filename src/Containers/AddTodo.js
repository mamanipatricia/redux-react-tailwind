import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../Actions/Actions";

const AddTodo = ({ dispatch }) => {
  let input;

  const submitTodo = (e) => {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }

    dispatch(addTodo(input.value));
    input.value = "";
  };

  return (
    <div>
      <form onSubmit={(e) => submitTodo(e)}>
        <input
          className="border border-red-400"
          ref={(node) => (input = node)}
        />
        <button
          className="bg-blue-400 p-2 border-none focus:outline-none"
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
