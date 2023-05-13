const TasksSubCategories = require('../models/tasks_subcategories.model');


const getAllTasksSubCategories = async (req, res) => {
    try {
        const getTasksSubCategories = await TasksSubCategories.findAll();
        // console.log(getTasksSubCategories)
        // res.send('get all tasks and subcategories');
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
        // console.log(newTaskSubCategory)
        // res.send('task and subcategory created');
        res.json(newTaskSubCategory);
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
        updateTaskSubCategory.set({ taskId, subcategoryId });
        await updateTaskSubCategory.save();
        res.json(updateTaskSubCategory);
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong cannot update a task and subcategory',
        });
    }
}

const deleteTaskSubCategory = async (req, res) => {
    // console.log(req.params.id)
    try {
        await TasksSubCategories.destroy({ where: { id: req.params.id } });
        res.status(204).json({
            message: 'Task and subcategory deleted successfully',
        });
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