module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phonenumber: {
      type: Sequelize.STRING,
    },
    major: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    avatar: {
      type: Sequelize.INTEGER,
    }
  });

  return User;
};
