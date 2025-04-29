
module.exports = (sequelize, DataTypes) => {
  const MasterProduct = sequelize.define('MasterProduct', {
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    subCat_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
  }, {
    tableName: 'master_products',
    timestamps: false,
  });

  return MasterProduct;
};
