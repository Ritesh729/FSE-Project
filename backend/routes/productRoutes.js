const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { isAdmin } = require('../middleware/authMiddleware');

router.post('/add', isAdmin, productController.addProduct);
router.post('/add-image', isAdmin, productController.addProductImage);

module.exports = router;
