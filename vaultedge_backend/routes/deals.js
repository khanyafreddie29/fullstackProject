
const express = require('express');
const router = express.Router();
const dealsController = require('../controllers/dealsController');

// GET all deals
router.get('/', dealsController.getDeals);

// GET deal by ID
router.get('/id/:deal_id', dealsController.getDeal);

// GET deal by Category
router.get('/category/:deal_category', dealsController.getDealByCategory);

module.exports = router;