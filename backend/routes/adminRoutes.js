const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { isAdmin } = require('../middleware/authMiddleware');

router.post('/add-admin', adminController.addAdmin);
router.get('/reviews', adminController.getReviews);

module.exports = router;
