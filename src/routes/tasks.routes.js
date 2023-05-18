const { Router } = require('express');
const router = Router();
const Tasks  = require('../models/tasks.model');
const {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    getOneTask,
    getAllTasksComplete
} = require('../controllers/tasks.controller');
const auth = require('../middelwares/auth.middelware');


//get all tasks
router.get('/tasks', getAllTasks);

//get all tasks with users, categories and subcategories
router.get('/tasks/info', getAllTasksComplete);

//create a new user
router.post('/tasks', auth, createTask);

//get a user by id
router.get('/tasks/:id', getOneTask);

//update a user by id
router.put('/tasks/:id', updateTask);

//delete a user by id
router.delete('/tasks/:id', deleteTask);

module.exports = router;