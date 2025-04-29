
module.exports = (sequelize, DataTypes) => {
  const Feedback = sequelize.define("Feedback", {
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });

  return Feedback;
};
