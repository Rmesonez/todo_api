const Task = require('../models/tasks.model');
const Categories = require('../models/categories.model');
const Subcategories = require('../models/subcategories.model');
const Users = require('../models/users.model');

//get all categories
const getAllCategories = async (req, res) => {
    try {
        const getCategories = await Categories.findAll({
            include: [{
                model: Task,
                attributes: { exclude: ['createdAt', 'updatedAt']},
                include: [{
                    model: Users,
                    attributes: ['id','username', 'email'],
                },
                {
                    model: Subcategories,
                    attributes: ['subcategory']
                }]
            }]
        });
        res.json(getCategories);
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong cannot get categories',
        });
    }
}

//create a new category
const createCategory = async (req, res) => {
    const { category } = req.body;
    try {
        const newCategory = await Categories.create({ category });
        res.json(newCategory);
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong cannot create a category',
        });
    }
}

//get one category
const getOneCategory = async (req, res) => {
    try {
        const getOneCategory = await Categories.findOne({ 
            where: { id: req.params.id },
            include: [{
                model: Task,
                attributes: { exclude: ['createdAt', 'updatedAt']},
                include: [{
                    model: Users,
                    attributes: ['id','username', 'email'],
                },
                {
                    model: Subcategories,
                    attributes: ['subcategory']
                }]
            }]
        });
        res.json(getOneCategory);
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong cannot get one category',
        });
    }
}

//update a category
const updateCategory = async (req, res) => {
    const { category } = req.body;
    try {
        const updateCategory = await Categories.update(
            { category },
            { where: { id: req.params.id }
        });
        updateCategory.set({ category });
        await updateCategory.save();
        res.json(updateCategory);
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong cannot update a category',
        });
    }
}

//delete a category
const deleteCategory = async (req, res) => {
    // console.log(req.params.id)
    try {
        await Categories.destroy({ where: { id: req.params.id } });
        res.status(204).json({
            message: 'Category deleted successfully',
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong cannot delete a category',
        });
    }
}

module.exports = {
    getAllCategories,
    createCategory,
    updateCategory,
    deleteCategory,
    getOneCategory
}
