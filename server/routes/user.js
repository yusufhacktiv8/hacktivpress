const express = require('express');

const router = express.Router();
const userController = require('../controllers/users');

router.get('/', userController.findAll);
router.post('/signup', userController.create);
// router.post('/singup', userController.signup);

module.exports = router;
