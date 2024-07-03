
const Task = require('../models/task');

const getAlltasks = async (req, res) => {
    const { limit = 10, skip = 0, sort = 'createdAt' } = req.query;

    try {
        const tasks = await Task.find()
            .sort(sort)
            .limit(parseInt(limit))
            .skip(parseInt(skip));

        return res.status(200).json(tasks);
    } catch (err) {
        console.error("Error getting all the tasks", err);
        return res.status(500).json({ msg: "Internal Server Error" });
    }
};

const createTask = async (req, res) => {
    const { title, description, dueDate, priority, status } = req.body;

    try {
        const task = new Task({
            title,
            description,
            dueDate,
            priority,
            status,
        });
        const newTask = await task.save();
        return res.status(201).json({ msg: "Success", task: newTask });
    } catch (err) {
        console.error("Error creating task", err);
        return res.status(500).json({ msg: "Internal Server Error" });
    }
};

const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        return res.status(200).json({ msg: "Task deleted successfully" });
    } catch (err) {
        console.error("Error deleting the task", err);
        return res.status(500).json({ msg: "Internal Server Error" });
    }
};

const updateTask = async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        return res.status(200).json({ msg: "Task updated successfully", task: updatedTask });
    } catch (err) {
        console.error("Error updating the task", err);
        return res.status(500).json({ msg: "Internal Server Error" });
    }
};

module.exports = {
    getAlltasks,
    createTask,
    updateTask,
    deleteTask
};
