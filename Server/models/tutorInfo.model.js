module.exports = (sequelize, Sequelize) => {
    const TutorInfo = sequelize.define("tutor_info", {
        firstname: {
        type: Sequelize.STRING,
      },
      surname: {
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

    });
  
    return TutorInfo;
  };
  