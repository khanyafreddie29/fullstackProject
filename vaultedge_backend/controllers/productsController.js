const Products = require('../models/productsModel.js');

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Products.getProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a product by ID
exports.getProductById = async (req, res) => {
      console.log('getProductById controller hit', req.params.product_id);
    try {
        const { product_id } = req.params;
        const product = await Products.getProductById(product_id);
        // console.log('Product fetched from DB:', product); //checking what is being fetched and why it is not displaying


        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//get product by brand
exports.getProductByBrand = async (req,res) => {
    try {
        const { product_brand } = req.params;
        const product = await Products.getProductByBrand(product_brand);

        if (!product){
            return res.status(404).json({ message: 'Brand not found'});
        }

        res.json(product)
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
}