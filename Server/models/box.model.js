module.exports = (sequelize, Sequelize) => {
    return sequelize.define("boxs", {
        title: {
            type: Sequelize.STRING,
        },
        message: {
            type: Sequelize.STRING,
        },
        status: {
            type: Sequelize.STRING,
        },
        data: {
            type: Sequelize.STRING,
        }
    });
};