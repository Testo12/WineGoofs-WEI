var express = require('express');
var router = express.router();

router.get('/:id', wine_controller.details);
router.put('/:id/update', wine_controller.update);
router.delete('/:id/delete', wine_controller.delete);
module.exports = router;