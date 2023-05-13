const { Router } = require('express');
const router = Router();
const {
    login,
    signup
} = require('../controllers/auth.controller');

//login
router.post('/api/login', login);

//signup
router.post('/api/signup', signup);

module.exports = router;