import React, { useEffect, useState } from "react";
import Todo from "./components/todo";
import { getAllTodo, addTodo, updateTodo, deleteTodo } from "./utils/handleApi";

const App = () => {
  const [todos, setTodos] = useState([]); // Updated name for clarity
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [todoId, setTodoId] = useState("");

  // Fetch todos when the component mounts
  useEffect(() => {
    getAllTodo(setTodos); // Fetch all todos from the backend
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text); // Set text in the input for editing
    setTodoId(_id); // Store the ID for updating
  };

  return (
    <div className="App">
      <div className="container">
        <h1>TODO APP</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Add Todo"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div
            className="add"
            onClick={
              isUpdating
                ? () => updateTodo(todoId, text, setText, setTodos, setIsUpdating)
                : () => addTodo(text, setText, setTodos)
            }
          >
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>

        <div className="list">
          {todos.length > 0 ? (
            todos.map((item) => (
              <Todo
                key={item._id}
                text={item.text}
                updateMode={() => updateMode(item._id, item.text)}
                deleteTodo={() => deleteTodo(item._id, setTodos)}
              />
            ))
          ) : (
            <p>No todos available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
