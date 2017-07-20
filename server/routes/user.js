const express = require('express');

const router = express.Router();
const userController = require('../controllers/users');

router.get('/', userController.findAll);

module.exports = router;
