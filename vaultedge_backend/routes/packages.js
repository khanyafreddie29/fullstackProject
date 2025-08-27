// routes/packagesRoutes.js
const express = require('express');
const router = express.Router();
const packagesController = require('../controllers/packagesController');

// GET all packages
router.get('/', packagesController.getPackages);

// GET package by ID
router.get('/:id', packagesController.getPackage);

module.exports = router;