module.exports = (sequelize, Sequelize) => {
    const Tag = sequelize.define("tags", {
      name: {
        type: Sequelize.STRING,
      },
    });
    
    return Tag;
  };
  