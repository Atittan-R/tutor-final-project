module.exports = (sequelize, Sequelize) => {
  const Cart = sequelize.define("carts", {
    stetus:{
      type: Sequelize.STRING,
    },
  });

  return Cart;
};
