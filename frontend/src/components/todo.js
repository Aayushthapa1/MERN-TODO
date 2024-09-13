import React from "react";
import { BiEdit, BiTrash } from "react-icons/bi";

const Todo = ({ text, updateMode, deleteTodo }) => {
  return (
    <div className="todo">
      <div className="text">{text}</div>
      <div className="icons">
        <BiEdit className="icon" onClick={updateMode} />
        <BiTrash className="icon" onClick={deleteTodo} />
      </div>
    </div>
  );
};

export default Todo;
