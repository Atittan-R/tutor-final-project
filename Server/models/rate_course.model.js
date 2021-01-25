module.exports = (sequelize, Sequelize) => {
    const Rate_course = sequelize.define("rate_course", {
   
        userId:{
            type: Sequelize.INTEGER,
        
        },
        courseId:{
            type: Sequelize.INTEGER,

        },
        rate: {
            type: Sequelize.DECIMAL(3, 2),
          },
    });
  
    return Rate_course;
  };