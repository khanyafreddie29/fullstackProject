const Cart = require('../models/cartModel.js');

// Get all products in a cart for a given user
exports.getCartByUser = async (req, res) => {
    try {        
        const user_id = req.user?.userId;
        const data = await Cart.getCartWithTotal(user_id);
        res.json(data);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

// Add product to cart
exports.addProduct = async (req, res) => {
    try {
        const user_id = req.user.userId;
        const {product_id,quantity} = req.body;

        const updatedCart = await Cart.addProductToCart({ user_id, product_id, quantity});
        res.status(201).json({
            message: 'Product added to cart successfully.',
            cart: updatedCart
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: e.message });
    }
};

// Update product quantity
exports.updateQuantity = async (req, res) => {
    try {
        const user_id = req.user.userId;
        const {product_id} = req.params;
        const { quantity } = req.body;

        const updatedCart = await Cart.updateProductQuantity(user_id, product_id, quantity);

        res.json({
            message: 'Product quantity updated successfully.',
            cart: updatedCart
        });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

// Delete a product from the cart
exports.deleteProduct = async (req, res) => {
    try {
        const user_id = req.user.userId;
        const {product_id} = req.params;

        const updatedCart = await Cart.deleteProductFromCart(user_id, product_id);

        res.json({
            message: 'Product removed from cart successfully.',
            cart: updatedCart
        });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

//empties the entire cart
exports.clearCart = async (req, res) => {
    try {
        const user_id = req.user.userId; 
        const updatedCart = await Cart.deleteCartByUser(user_id);

        res.json({
            message: "Your cart has been emptied successfully.",
            cart: updatedCart
        });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

// Decrease quantity of a product in the cart
exports.decreaseProductQuantity = async (req, res) => {
    try {
        const user_id = req.user.userId; 
        const { product_id } = req.params;

        if (!product_id) {
            return res.status(400).json({ message: 'Product ID is required.' });
        }

        const updatedCart = await Cart.decreaseProductQuantity(user_id, product_id);
        return res.status(200).json({
            message: 'Product quantity decreased successfully.',
            cart: updatedCart
        });
    } catch (error) {
        return res.status(500).json({ message: error.message || 'Failed to decrease quantity.' });
    }
};

exports.increaseProductQuantity = async (req, res) => {
    try {
        const user_id = req.user.userId;
        const { product_id } = req.params;

        if (!product_id) {
            return res.status(400).json({ message: 'Product ID is required.' });
        }

        const updatedCart = await Cart.increaseProductQuantity(user_id, product_id);

        res.status(200).json({
            message: 'Product quantity increased successfully.',
            cart: updatedCart
        });
    } catch (error) {
        res.status(500).json({ message: error.message || 'Failed to increase quantity.' });
    }
};

// Add package to cart
exports.addPackage = async (req, res) => {
    try {
        const user_id = req.user.userId;
        const {package_id, quantity} = req.body;

        const updatedCart = await Cart.addPackageToCart({ user_id, package_id, quantity});
        res.status(201).json({
            message: 'Package added to cart successfully.',
            cart: updatedCart
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: e.message });
    }
};