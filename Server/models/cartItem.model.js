module.exports = (sequelize, Sequelize) => {
  const CartItem = sequelize.define("cart_items", {
    amount: {
      type: Sequelize.STRING,
    },
  });

  return CartItem;
};
