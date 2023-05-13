const { Router } = require('express');
const router = Router();
const Categories = require('../models/categories.model');
const {
    getAllCategories,
    createCategory,
    updateCategory,
    deleteCategory,
    getOneCategory
} = require('../controllers/categories.controller');

//get all categories
router.get('/categories', getAllCategories);

//create a new category
router.post('/categories', createCategory);

//get one category 
router.get('/categories/:id', getOneCategory);

//update a category 
router.put('/categories/:id', updateCategory);

//delete a category 
router.delete('/categories/:id', deleteCategory);

module.exports = router;