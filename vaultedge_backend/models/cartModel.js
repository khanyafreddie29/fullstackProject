const db = require('../config/db');

const getCartWithTotal = async (user_id) => {
    const [rows] = await db.query(
        'SELECT *, (quantity * price) AS subtotal FROM cart WHERE user_id = ?',
        [user_id]
    );
    const total = rows.reduce((sum, item) => sum + parseFloat(item.subtotal), 0); //use the parsefloat to make sure it is treated as a number and not a string because it concatenates as a string
    return { items: rows, total_price: total.toFixed(2) };
};

// add product to cart
exports.addProductToCart = async (product) => {
    const { user_id, product_id, quantity } = product;

    const connection = await db.getConnection();
    try {
        await connection.beginTransaction();

        const [[prod]] = await connection.query(
            'SELECT product_name, product_price FROM products WHERE product_id = ?',
            [product_id.trim()]
        );
        if (!prod) throw new Error('Product not found');

        // Check if product already in user's cart
        const [existing] = await connection.query(
            'SELECT * FROM cart WHERE user_id = ? AND product_id = ?',
            [user_id, product_id.trim()]
        );

        if (existing.length > 0) {
            // Update quantity
            const newQuantity = existing[0].quantity + quantity;
            await connection.query(
                'UPDATE cart SET quantity = ? WHERE user_id = ? AND product_id = ?',
                [newQuantity, user_id, product_id.trim()]
            );
        } else {
            // Insert new product into cart
            await connection.query(
                'INSERT INTO cart (user_id, product_id, product_name, quantity, price) VALUES (?, ?, ?, ?, ?)',
                [user_id, product_id.trim(), prod.product_name, quantity, prod.product_price]
            );
        }

        await connection.commit();

        return await getCartWithTotal(user_id);

    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.release();
    }
};

// update quantity of a product in cart
exports.updateProductQuantity = async (user_id, product_id, quantity) => {
    await db.query(
        'UPDATE cart SET quantity = ? WHERE user_id = ? AND product_id = ?',
        [quantity, user_id, product_id.trim()]
    );
    return await getCartWithTotal(user_id);
};

// remove a product from cart
exports.deleteProductFromCart = async (user_id, product_id) => {
    await db.query(
        'DELETE FROM cart WHERE user_id = ? AND product_id = ?',
        [user_id, product_id.trim()]
    );
    return await getCartWithTotal(user_id);
};

// empty the cart for a user
exports.deleteCartByUser = async (user_id) => {
    await db.query('DELETE FROM cart WHERE user_id = ?', [user_id]);
    return { message: 'Cart emptied successfully.' };
};

exports.getCartWithTotal = getCartWithTotal; 

// decrease quantity of a product in cart by 1 to add functionality to my button
exports.decreaseProductQuantity = async (user_id, product_id) => {
    const [[product]] = await db.query(
        'SELECT quantity FROM cart WHERE user_id = ? AND product_id = ?',
        [user_id, product_id.trim()]
    );

    if (!product) {
        throw new Error('Product not found in cart');
    }

    if (product.quantity <= 1) {
        // if quantity is 1 remove the item from the cart
        await db.query(
            'DELETE FROM cart WHERE user_id = ? AND product_id = ?',
            [user_id, product_id.trim()]
        );
    } else {
        // decrease the quantity by 1
        await db.query(
            'UPDATE cart SET quantity = quantity - 1 WHERE user_id = ? AND product_id = ?',
            [user_id, product_id.trim()]
        );
    }

    return await getCartWithTotal(user_id);
};

//increase by one function to use on button 
exports.increaseProductQuantity = async (user_id, product_id) => {
    const [[product]] = await db.query(
        'SELECT quantity FROM cart WHERE user_id = ? AND product_id = ?', //checking if it exists
        [user_id, product_id.trim()]
    );
    if (!product) {
        throw new Error('Product not found in cart');
    }
    await db.query(
        'UPDATE cart SET quantity = quantity + 1 WHERE user_id = ? AND product_id = ?',
        [user_id, product_id.trim()]
    );

    return await getCartWithTotal(user_id);
};

//add package to cart 
exports.addPackageToCart = async (packageData) => {
    const { user_id, package_id , quantity } = packageData;

    const connection = await db.getConnection();
    try {
        await connection.beginTransaction();

        // Always fetch package details from DB to prevent price tampering
        const [[pkg]] = await connection.query(
            'SELECT * FROM packages WHERE package_id = ?',
            [package_id.trim()]
        );
        if (!pkg) throw new Error('Package not found');

        // Check if package already in user's cart
        const [existing] = await connection.query(
            'SELECT * FROM cart WHERE user_id = ? AND product_id = ?',
            [user_id, package_id.trim()]
        );

        if (existing.length > 0) {
            // Update quantity
            const newQuantity = existing[0].quantity + quantity;
            await connection.query(
                'UPDATE cart SET quantity = ? WHERE user_id = ? AND product_id = ?',
                [newQuantity, user_id, package_id.trim()]
            );
        } else {
            // Insert new package into cart
            await connection.query(
                'INSERT INTO cart (user_id, product_id, product_name, quantity, price) VALUES (?, ?, ?, ?, ?)',
                [user_id, package_id.trim(), pkg.package, quantity, pkg.package_price]
            );
        }

        await connection.commit();

        return await getCartWithTotal(user_id);

    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.release();
    }
};

