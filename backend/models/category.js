
module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('master_category', {
      category_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category_desc: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      created_by: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      category_image: {
        type: DataTypes.STRING,
        allowNull: true, 
      },
    }, {
      tableName: 'master_category',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: false,
    });
  
    return Category;
  };
  