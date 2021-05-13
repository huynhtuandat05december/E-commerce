const productsCtrl = require('../controllers/productsControl');
const router = require('express').Router();

router.route('/')
    .get(productsCtrl.getProducts)
    .post(productsCtrl.postProduct)
router.route('/:id')
    .delete(productsCtrl.deleteProduct)

module.exports = router;