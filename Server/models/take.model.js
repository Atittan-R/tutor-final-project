module.exports = (sequelize, Sequelize) => {
  const take = sequelize.define("takes", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
  });

  return take;
};
