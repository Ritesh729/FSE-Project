
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    order_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    order_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'orders',
    timestamps: false
  });

  return Order;
};
