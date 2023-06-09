const TasksSubCategories = require('../models/tasks_subcategories.model');


const getAllTasksSubCategories = async (req, res) => {
    try {
        const getTasksSubCategories = await TasksSubCategories.findAll();
        res.json(getTasksSubCategories);
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong cannot get tasks and subcategories',
        });
    }
}

const createTaskSubCategory = async (req, res) => {
    const { taskId, subcategoryId } = req.body;
    try {
        const newTaskSubCategory = await TasksSubCategories.create({ taskId, subcategoryId });
        res.status(201).send();
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong cannot create a task and subcategory',
        });
    }
}

const updateTaskSubCategory = async (req, res) => {
    const { taskId, subcategoryId } = req.body;
    try {
        const updateTaskSubCategory = await TasksSubCategories.update(
            { taskId, subcategoryId },
            { where: { id: req.params.id }
        });
        res.status(202).send();
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong cannot update a task and subcategory',
        });
    }
}

const deleteTaskSubCategory = async (req, res) => {
    try {
        await TasksSubCategories.destroy({ where: { id: req.params.id } });
        res.status(204).send();
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong cannot delete a task and subcategory',
        });
    }
}

module.exports = {
    getAllTasksSubCategories,
    createTaskSubCategory,
    updateTaskSubCategory,
    deleteTaskSubCategory
}