var express = require('express');
var router = express.Router();

var wine_controller = require('../Controllers/wine.controller');

router.get('/', wine_controller.list);
router.post('/create', wine_controller.create);
router.get('/:id', wine_controller.details);
router.put('/:id/update', wine_controller.update);
router.delete('/:id/delete', wine_controller.delete);
module.exports = router;