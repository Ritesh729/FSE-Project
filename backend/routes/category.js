
const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const upload = require('../middleware/multersetup');  
const db = require('../models');
const Category = db.category;

router.post('/', upload.single('category_image'),categoryController.createCategory);

router.get('/', categoryController.getAllCategories);


router.get('/count', async (req, res) => {
    try {
      const count = await Category.count();
      res.status(200).json({ count });
    } catch (err) {
      console.error('Error fetching category count:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


router.get('/:id', categoryController.getCategoryById);

router.put('/:id', upload.single('category_image'),categoryController.updateCategory);

router.delete('/:id', categoryController.deleteCategory);




module.exports = router;
