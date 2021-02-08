module.exports = (sequelize, Sequelize) => {
  const Course = sequelize.define("courses", {
    name: {
      type: Sequelize.STRING,
    },
    day: {
      type: Sequelize.STRING,
    },
    time_start: {
      type: Sequelize.TIME,
    },
    time_end: {
      type: Sequelize.TIME,
    },
    description: {
      type: Sequelize.STRING,
    },
    duration: {
      type: Sequelize.STRING,
    },
    amount: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    lat: {
      type: Sequelize.STRING,
    },
    long: {
      type: Sequelize.STRING,
    },
    distance: {
      type: Sequelize.STRING,
    },
    rate: {
      type: Sequelize.DECIMAL(3, 2),
      allowNull: false,
    },
    courseAvatar: {
      type: Sequelize.INTEGER,
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return Course;
};
