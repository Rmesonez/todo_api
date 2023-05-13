const { Router } = require('express');
const router = Router();
const TasksSubCategories  = require('../models/tasks_subcategories.model');
const {
    getAllTasksSubCategories,
    createTaskSubCategory,
    updateTaskSubCategory,
    deleteTaskSubCategory
} = require('../controllers/tasks_subcategories.controller');

router.get('/tasks_subcategories', getAllTasksSubCategories);

router.post('/tasks_subcategories', createTaskSubCategory);

router.put('/tasks_subcategories/:id', updateTaskSubCategory);

router.delete('/tasks_subcategories/:id', deleteTaskSubCategory);


module.exports = router;