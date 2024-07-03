const express = require('express');
const router = express.Router();
const {
    getAlltasks,
    createTask,
    updateTask,
    deleteTask   
} = require('../controllers/taskController');

router.get('/', getAlltasks);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router ;
