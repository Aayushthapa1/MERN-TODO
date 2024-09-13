const { Router } = require("express");
const { getTodo, saveTodo, updateTodo, deleteTodo } = require("../controllers/todoController");
const router = Router();

// Define the routes for handling todo operations

// Get all todos
router.get('/', getTodo);

// Add a new todo
router.post('/save', saveTodo);

// Update an existing todo by ID
router.put('/update/:id', updateTodo);

// Delete a todo by ID
router.delete('/delete/:id', deleteTodo);

module.exports = router;
