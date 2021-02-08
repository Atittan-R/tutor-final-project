module.exports = (sequelize, Sequelize) => {
  const take = sequelize.define("takes", {
    // id: {
    //   type: Sequelize.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
    //   allowNull: false,
    // },
  });

  return take;
};
