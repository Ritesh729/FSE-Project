
module.exports = (sequelize, DataTypes) => {
  const SubCategory = sequelize.define('SubCategory', {
    subCat_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    cat_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'sub_categories',
    timestamps: false
  });

  return SubCategory;
};
