var express = require('express');
var router = express.Router();
cart_controller = require('../controllers/cart.controller');

router.get('/', cart_controller.list);
router.get('/:id', cart_controller.number);
router.post('/create', cart_controller.create);
router.delete('/delete', cart_controller.delete);
module.exports = router;