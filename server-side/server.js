const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5001;

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
