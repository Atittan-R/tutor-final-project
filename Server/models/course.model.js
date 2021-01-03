module.exports = (sequelize, Sequelize) => {
  const Course = sequelize.define("courses", {
    name: {
      type: Sequelize.STRING,
    },
    day: {
      type: Sequelize.STRING,
    },
    time_start: {
      type: Sequelize.STRING,
    },
    time_end: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    duration: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.STRING,
    },
    lat: {
      type: Sequelize.STRING,
    },
    long: {
      type: Sequelize.STRING,
    },
  });

  return Course;
};
