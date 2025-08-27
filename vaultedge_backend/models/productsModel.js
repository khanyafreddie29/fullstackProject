//Here i am declaring all my functions which will interact with the database
const db = require('../config/db');

exports.getProducts = async () => {
    const [rows] = await db.query('SELECT * FROM products');
    return rows;
}
exports.getProductById = async (product_id) => {
    const [rows] = await db.query('SELECT * FROM products WHERE product_id = ?', [product_id]);
    return rows[0];
}

exports.getProductByBrand = async (product_brand) => {
    const [rows] = await db.query('SELECT * FROM products WHERE product_brand = ?', [product_brand]);
    return rows;
}
