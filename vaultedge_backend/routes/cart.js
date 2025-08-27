const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const auth = require('../middleware/auth');

// logged in clients can only see their cart 
router.get('/', auth, cartController.getCartByUser);

// Add a product to the cart
router.post('/',auth, cartController.addProduct);

// Update quantity of a specific product
router.put('/:product_id',auth, cartController.updateQuantity);

//decrease quantity by one for a product
router.put('/decrease/:product_id', auth, cartController.decreaseProductQuantity);

//increase quantity by one for a product
router.put('/increase/:product_id', auth, cartController.increaseProductQuantity);

// Remove a specific product from the cart
router.delete('/:product_id',auth, cartController.deleteProduct);

// Empty the entire cart
router.delete('/',auth, cartController.clearCart);

//add package to cart
router.post('/packages', auth, cartController.addPackage);

module.exports = router;


