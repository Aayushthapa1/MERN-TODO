const todoModel = require('../models/todoModel');

// Get all todos
module.exports.getTodo = async (req, res) => {
    try {
        const todos = await todoModel.find(); // Fetch all todos from the database
        res.status(200).json(todos); // Send todos as a response
    } catch (error) {
        console.error("Error fetching todos:", error);
        res.status(500).json({ message: "Failed to fetch todos" });
    }
};

// Add a new todo
module.exports.saveTodo = async (req, res) => {
    const { text } = req.body; // Extract 'text' from the request body
    try {
        const newTodo = await todoModel.create({ text }); // Create a new todo in the database
        console.log("Todo added successfully:", newTodo);
        res.status(201).json(newTodo); // Respond with the new todo
    } catch (error) {
        console.error("Error adding todo:", error);
        res.status(500).json({ message: "Failed to add todo" });
    }
};

// Update an existing todo
module.exports.updateTodo = async (req, res) => {
    const { id } = req.params; // Extract 'id' from route parameters
    const { text } = req.body; // Extract 'text' from the request body
    try {
        const updatedTodo = await todoModel.findByIdAndUpdate(id, { text }, { new: true }); // Update todo by ID
        if (!updatedTodo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        res.status(200).json(updatedTodo); // Respond with the updated todo
    } catch (error) {
        console.error("Error updating todo:", error);
        res.status(500).json({ message: "Failed to update todo" });
    }
};

// Delete a todo
module.exports.deleteTodo = async (req, res) => {
    const { id } = req.params; // Extract 'id' from route parameters
    try {
        const deletedTodo = await todoModel.findByIdAndDelete(id); // Delete todo by ID
        if (!deletedTodo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        res.status(200).json({ message: "Todo deleted successfully" }); // Respond with a success message
    } catch (error) {
        console.error("Error deleting todo:", error);
        res.status(500).json({ message: "Failed to delete todo" });
    }
};
