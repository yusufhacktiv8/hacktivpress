const express = require('express');

const router = express.Router();
const articleController = require('../controllers/articles');

router.get('/', articleController.findAll);

module.exports = router;
