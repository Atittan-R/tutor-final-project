module.exports = (sequelize, Sequelize) => {
  const Cart = sequelize.define("carts", {
    status: {
      type: Sequelize.STRING,
    },
    total: {
      type: Sequelize.DECIMAL(10, 2),
    },
  });

  return Cart;
};
