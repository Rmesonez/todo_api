const Task = require('../models/tasks.model');
const subCategories = require('../models/subcategories.model');
const Category = require('../models/categories.model');
const Users = require('../models/users.model');

//get all subcategories
const getAllSubCategories = async (req, res) => {
    try {
        const getSubCategories = await subCategories.findAll({
            attributes: ['subcategory'],
            include: [{
                model: Task,
                attributes: ['id','title', 'description', 'completed' ],
                include: [{
                    model: Category,
                    attributes: ['category']
                },
                {
                    model: Users,
                    attributes: ['id','username', 'email'],
                }] 
            }]
        });
        res.json(getSubCategories);
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong cannot get subcategories',
        });
    }
}

//create a new subcategory
const createSubCategory = async (req, res) => {
    const { subcategory } = req.body;
    try {
        const newSubCategory = await subCategories.create({ subcategory });
        res.json(newSubCategory);
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong cannot create a subcategory',
        });
    }
}

//get one subcategory
const getOneSubCategory = async (req, res) => {
    try {
        const getOneSubCategory = await subCategories.findOne({ where: { id: req.params.id },
            include: [{
                model: Task,
                attributes: ['id','title', 'description', 'completed' ],
                include: [{
                    model: Category,
                    attributes: ['category']
                },
                {
                    model: Users,
                    attributes: ['id','username', 'email'],
                }] 
            }]
        });
        res.json(getOneSubCategory);
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong cannot get one subcategory',
        });
    }
}

//update a subcategory
const updateSubCategory = async (req, res) => {
    const { subcategory } = req.body;
    try {
        const updateSubCategory = await subCategories.update(
            { subcategory },
            { where: { id: req.params.id }
        });
        updateSubCategory.set({ subcategory });
        await updateSubCategory.save();
        res.json(updateSubCategory);
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong cannot update a subcategory',
        });
    }
}

//delete a subcategory
const deleteSubCategory = async (req, res) => {
    try {
        const deleteSubCategory = await subCategories.destroy({ where: { id: req.params.id } });
        res.json(deleteSubCategory);
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong cannot delete a subcategory',
        });
    }
}

module.exports = {
    getAllSubCategories,
    createSubCategory,
    getOneSubCategory,
    updateSubCategory,
    deleteSubCategory
}