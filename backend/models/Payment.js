
module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define("Payment", {
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  return Payment;
};
