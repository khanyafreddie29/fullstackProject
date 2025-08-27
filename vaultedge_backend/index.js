const express = require('express');
const dotenv = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const cors = require('cors');
 
dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const cartRoutes = require('./routes/cart');
const productRoutes = require('./routes/products'); 
const userRoutes = require('./routes/user');
const packagesRoutes = require('./routes/packages')
const dealsRoutes = require('./routes/deals');
const contactRoutes = require('./routes/contact');
const authRoutes = require('./routes/auth');
// const orderRoutes = require('./routes/orders');  
// const paymentRoutes = require('./routes/payments'); 

app.use('/cart', cartRoutes);
app.use('/products', productRoutes);
app.use('/contact', contactRoutes);

app.use('/users', userRoutes);
app.use('/packages', packagesRoutes);
app.use('/deals', dealsRoutes);
app.use('/auth', authRoutes);
// app.use('/orders', orderRoutes);
// app.use('/payments', paymentRoutes);

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});