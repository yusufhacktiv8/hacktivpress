const express = require('express');

const router = express.Router();
const articleController = require('../controllers/articles');

router.get('/', articleController.findAll);
router.post('/', articleController.create);
router.put('/', articleController.update);

module.exports = router;
