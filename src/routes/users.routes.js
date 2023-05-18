const { Router } = require('express');
const router = Router();
const Users = require('../models/users.model');
const { 
    getAllUsers,
    //createUser,
    updateUser,
    deleteUser,
    getOneUser,
    getAllUsersTasks
} = require('../controllers/users.controller');


//get all users
router.get('/api/users', getAllUsers);

//all users and tasks
router.get('/api/users/tasks', getAllUsersTasks);

// //create a new user
//router.post('/api/users', createUser);

//get a user by id
router.get('/api/users/:id', getOneUser);

//update a user by id
router.put('/api/users/:id', updateUser);

//delete a user by id
router.delete('/api/users/:id', deleteUser);

module.exports = router;