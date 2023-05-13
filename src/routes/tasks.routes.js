const { Router } = require('express');
const router = Router();
const Tasks  = require('../models/tasks.model');
const {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    getOneTask
} = require('../controllers/tasks.controller');


//get all tasks
router.get('/tasks', getAllTasks);

//create a new user
router.post('/tasks', createTask);

//get a user by id
router.get('/tasks/:id', getOneTask);

//update a user by id
router.put('/tasks/:id', updateTask);

//delete a user by id
router.delete('/tasks/:id', deleteTask);

module.exports = router;