var express = require('express');
var router = express.Router();
var wine_controller = require('../controllers/wine.controller');

router.get('/', wine_controller.list);
router.get('/:id', wine_controller.details);
module.exports = router;