module.exports = (sequelize, Sequelize) => {
  const Request = sequelize.define("requests", {
    name: {
      type: Sequelize.STRING,
    },
    date: {
      type: Sequelize.STRING,
    },
    time_start: {
      type: Sequelize.STRING,
    },
    time_end: {
      type: Sequelize.STRING,
    },
    duration: {
      type: Sequelize.STRING,
    },
    status: {
      //Available || Taked
      type: Sequelize.STRING,
    },
  });

  return Request;
};
