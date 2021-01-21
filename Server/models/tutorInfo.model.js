module.exports = (sequelize, Sequelize) => {
  const TutorInfo = sequelize.define("tutor_info", {
    firstname: {
      type: Sequelize.STRING,
    },
    lastname: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    phoneNumber: {
      type: Sequelize.STRING,
    },
    major: {
      type: Sequelize.STRING,
    },
    experience: {
      type: Sequelize.STRING,
    },
    date_of_birth: {
      type: Sequelize.DATE,
    },
  });

  return TutorInfo;
};
