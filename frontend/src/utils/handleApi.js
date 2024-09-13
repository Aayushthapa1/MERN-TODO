import axios from "axios";

const BASE_URL = "http://localhost:5001"; // Ensure the correct URL

// Get all todos
const getAllTodo = async (setTodos) => {
  try {
    const response = await axios.get(`${BASE_URL}/`);
    console.log("Todos fetched:", response.data);
    setTodos(response.data); // Set todos in state
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
};

// Add a new todo
const addTodo = async (text, setText, setTodos) => {
  if (!text.trim()) return; // Prevent adding empty todos
  try {
    await axios.post(`${BASE_URL}/save`, { text });
    setText(""); // Clear input field
    getAllTodo(setTodos); // Refresh todos list
  } catch (error) {
    console.error("Error adding todo:", error);
  }
};

// Update an existing todo
const updateTodo = async (todoId, text, setText, setTodos, setIsUpdating) => {
  if (!text.trim()) return; // Prevent empty updates
  try {
    const response = await axios.put(`${BASE_URL}/update/${todoId}`, { text });
    console.log("Todo updated:", response.data);
    setText(""); // Clear input field
    setIsUpdating(false); // Exit update mode
    getAllTodo(setTodos); // Refresh todos list
  } catch (error) {
    console.error("Error updating todo:", error);
  }
};

// Delete a todo
const deleteTodo = async (todoId, setTodos) => {
  try {
    await axios.delete(`${BASE_URL}/delete/${todoId}`);
    getAllTodo(setTodos); // Refresh todos list
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
};

export { getAllTodo, addTodo, updateTodo, deleteTodo };
