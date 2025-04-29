
const db = require('../models');
const Category = db.category; 

exports.createCategory = async (req, res) => {
  try {
    const { category_name, category_desc, created_by } = req.body;

    const existingCategory = await Category.findOne({ where: { category_name } });
    if (existingCategory) {
      return res.status(400).json({ message: 'Category already exists' });
    }

    let category_image = null;
    if (req.file) {
      console.log("Uploaded file path:", req.file.path);
      category_image = req.file.path; 
    }

    const category = await Category.create({
      category_name,
      category_desc,
      created_by,
      category_image,
    });

    console.log("Category added successfully:", category); 
    res.status(201).json({ message: 'Category added successfully', category });
  } catch (error) {
    console.error('Error while creating category:', error); 
    res.status(500).json({ error: 'Failed to add category', details: error.message });
  }
};


exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    console.log("Fetched categories:", categories);  
    res.status(200).json(categories);
  } catch (error) {
    console.error('Error while fetching categories:', error);  
    res.status(500).json({ error: 'Failed to fetch categories', details: error.message });
  }
};


exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.status(200).json(category);
  } catch (error) {
    console.error('Error while fetching category by ID:', error);  // Debugging log
    res.status(500).json({ error: 'Failed to fetch category', details: error.message });
  }
};


exports.updateCategory = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    const { category_name, category_desc, created_by } = req.body;
    let category_image = category.category_image; 

    if (req.file) {
      console.log("New uploaded file path:", req.file.path); 
      category_image = req.file.path; 
    }

    
    category.category_name = category_name;
    category.category_desc = category_desc;
    category.created_by = created_by;
    category.category_image = category_image;

    await category.save();

    console.log("Category updated successfully:", category); 
    res.status(200).json({ message: 'Category updated successfully', category });
  } catch (error) {
    console.error('Error while updating category:', error);  
    res.status(500).json({ error: 'Failed to update category', details: error.message });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    await category.destroy();
    console.log("Category deleted successfully:", category); 
    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    console.error('Error while deleting category:', error); 
    res.status(500).json({ error: 'Failed to delete category', details: error.message });
  }
};

