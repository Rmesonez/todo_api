const { Router } = require('express');
const router = Router();
const Subcategories = require('../models/subcategories.model');
const {
    getAllSubCategories,
    createSubCategory,
    getOneSubCategory,
    updateSubCategory,
    deleteSubCategory
} = require('../controllers/subcategories.controller');

//get all subcategories
router.get('/subcategories', getAllSubCategories);

//create a new subcategory
router.post('/subcategories', createSubCategory);

//get one subcategory
router.get('/subcategories/:id', getOneSubCategory);

//update a subcategory
router.put('/subcategories/:id', updateSubCategory);

//delete a subcategory
router.delete('/subcategories/:id', deleteSubCategory);

module.exports = router;