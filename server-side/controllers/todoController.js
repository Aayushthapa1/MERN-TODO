const todoModel = require('../models/todoModel');


module.exports.getTodo = async (req, res) => {
    const todo= await todoModel.find();
    res.send(todo);
}

module.exports.saveTodo = async (req, res) => {
    const {text} = req.body;

    todoModel.create({text})
    .then ((data)=>{
        console.log("Added Succesfully...")
        console.log(data)
        res.send(data);
    })
}


module.exports.updateTodo = async (req, res) => {
    const {id, text} = req.body;
    todoModel.
    findByIdAndUpdate(id, {text})
    .then (()=>
        res.send("Updated Succesfully..."))
        .catch ((err) =>
            console.log(err))
}

module.exports.deleteTodo = async (req, res) => {
    const {id} = req.body;
    todoModel.
    findByIdAndDelete(id)
    .then (()=>
        res.send("Deleted Succesfully..."))
        .catch((err) =>
            console.log(err))
}
