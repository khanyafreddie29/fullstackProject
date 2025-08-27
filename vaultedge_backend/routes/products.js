const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController.js');

router.get('/brand/:product_brand',productsController.getProductByBrand);
router.get('/id/:product_id', productsController.getProductById);
router.get('/', productsController.getAllProducts);

module.exports = router;
