module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    phonenumber: {
      type: Sequelize.STRING,
    },
    major: {
      type: Sequelize.STRING,
    },
    avatar: {
      type: Sequelize.INTEGER,
    }
  });

  return User;
};
