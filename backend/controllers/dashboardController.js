const db = require("../models");

const getDashboardData = async (req, res) => {
  try {
    const categoryCount = await db.Category.count();
    const subCategoryCount = await db.SubCategory.count();
    const productCount = await db.Product.count();

    res.json({
      categoryCount,
      subCategoryCount,
      productCount,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { getDashboardData };
