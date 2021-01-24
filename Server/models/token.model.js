module.exports = (sequelize, Sequelize) => {
  const token = sequelize.define("tokens", {
    value: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return token;
};
