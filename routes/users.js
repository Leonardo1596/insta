const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.post('/auth/sign-up',UserController.register);

module.exports = router;