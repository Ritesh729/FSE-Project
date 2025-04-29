const { MasterProduct, ProductImage } = require('../models');

exports.addProduct = async (req, res) => {
  try {
    const product = await MasterProduct.create(req.body);
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Add product failed', error: err });
  }
};

exports.addProductImage = async (req, res) => {
  try {
    const { product_id, image_url } = req.body;
    const image = await ProductImage.create({ product_id, image_url });
    res.json(image);
  } catch (err) {
    res.status(500).json({ message: 'Add image failed', error: err });
  }
};
