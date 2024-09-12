const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/todoRoute");
require("dotenv").config(); // Load environment variables
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5001;
const mongoURI = process.env.MONGO_URI;

// Middleware for JSON handling
app.use(express.json()); 

// Middleware for CORS
app.use(cors());

// Connect to MongoDB
mongoose.connect(mongoURI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use(routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
