
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./User');
db.category = require('./category')(sequelize, DataTypes);
db.SubCategory = require('./SubCategory')(sequelize, DataTypes);
db.MasterProduct = require('./MasterProduct')(sequelize, DataTypes);
db.ProductImage = require('./ProductImage')(sequelize, DataTypes);
db.Order = require('./Order')(sequelize, DataTypes);
db.OrderItem = require('./OrderItem')(sequelize, DataTypes);
db.Review = require('./Review')(sequelize, DataTypes);
db.Payment = require('./Payment')(sequelize, DataTypes);
db.Feedback = require('./Feedback')(sequelize, DataTypes);


db.SubCategory.belongsTo(db.category, { foreignKey: 'cat_id' });
db.category.hasMany(db.SubCategory, { foreignKey: 'cat_id' });

db.MasterProduct.belongsTo(db.category, { foreignKey: 'cat_id' });
db.category.hasMany(db.MasterProduct, { foreignKey: 'cat_id' });

db.MasterProduct.belongsTo(db.SubCategory, { foreignKey: 'subCat_id' });
db.SubCategory.hasMany(db.MasterProduct, { foreignKey: 'subCat_id' });


db.ProductImage.belongsTo(db.MasterProduct, { foreignKey: 'product_id' });
db.MasterProduct.hasMany(db.ProductImage, { foreignKey: 'product_id' });


db.Order.belongsTo(db.User, { foreignKey: 'user_id' });
db.User.hasMany(db.Order, { foreignKey: 'user_id' });


db.OrderItem.belongsTo(db.Order, { foreignKey: 'order_id' });
db.Order.hasMany(db.OrderItem, { foreignKey: 'order_id' });

db.OrderItem.belongsTo(db.MasterProduct, { foreignKey: 'product_id' });
db.MasterProduct.hasMany(db.OrderItem, { foreignKey: 'product_id' });


db.Review.belongsTo(db.User, { foreignKey: 'user_id' });
db.User.hasMany(db.Review, { foreignKey: 'user_id' });

db.Review.belongsTo(db.MasterProduct, { foreignKey: 'product_id' });
db.MasterProduct.hasMany(db.Review, { foreignKey: 'product_id' });


db.Payment.belongsTo(db.Order, { foreignKey: 'order_id' });
db.Order.hasOne(db.Payment, { foreignKey: 'order_id' });


db.Feedback.belongsTo(db.User, { foreignKey: 'user_id' });
db.User.hasMany(db.Feedback, { foreignKey: 'user_id' });


sequelize.sync()
  .then(() => {
    console.log("Database synced successfully");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });

module.exports = db;
