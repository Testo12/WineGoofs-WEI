var express = require('express');
var router = express.router();

router.get('/:id', wine_controller.number);
router.post('/:id/update', wine_controller.create);
router.delete('/:id/delete', wine_controller.delete);
module.exports = router;