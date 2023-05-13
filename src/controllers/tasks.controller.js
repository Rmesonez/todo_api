const Task  = require('../models/tasks.model');
const User  = require('../models/users.model');
const Categories  = require('../models/categories.model');
const Subcategories  = require('../models/subcategories.model');

const getAllTasks = async (req, res) => {
    try {
        const getTasks = await Task.findAll({
            attributes: [ 'id', 'title', 'description', 'completed'],
            include: [ {
                model: User,
                attributes: ['id', 'username', 'email'],
            },
            {
                model: Categories,
                attributes: ['category']
            },
            {
                model: Subcategories,
                attributes: ['subcategory']
            }]    
        });
        res.json(getTasks);
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong cannot get tasks',
        });
    }
};

const createTask = async (req, res) => {
    const { title, description, completed, user_id, category_id } = req.body;
    try {
        const newTask = await Task.create({ title, description, completed, user_id, category_id });
        res.json(newTask);
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong cannot create a task',
        });
    }
};

const updateTask = async (req, res) => {
    const { title, description, completed, user_id, category_id, createdAT, updatedAT } = req.body;
    try {
        const updateTask = await Task.update(
            { title, description, completed, user_id, category_id, createdAT, updatedAT },
            { where: { id: req.params.id }
        });
        // updateTask.set({ title, description, completed, user_id, category_id, createdAT, updatedAT });
        // await updateTask.save();
        res.json(updateTask);
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong cannot update a task',
        });
    }
};

const deleteTask = async (req, res) => {
    try {
        await Task.destroy({ where: { id: req.params.id } });
        res.status(204).json({
            message: 'Task deleted successfully',
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong cannot delete a task',
        });
    }
};

const getOneTask = async (req, res) => {
    try{
        const getTask = await Task.findOne({ 
            where: { id: req.params.id },
            attributes: [ 'id', 'title', 'description', 'completed'],
            include: [ {
                model: User,
                attributes: ['id', 'username', 'email'],
            },
            {
                model: Categories,
                attributes: ['category']
            },
            {
                model: Subcategories,
                attributes: ['subcategory']
            }]    
        });
        if(!getTask){
            return res.status(400).json({
                message: 'Task not found',
            });
        }
        res.json(getTask);
    }   catch (error) {
        return res.status(500).json({
            message: 'Something went wrong cannot get a task',
        });
    }
};


module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    getOneTask
};