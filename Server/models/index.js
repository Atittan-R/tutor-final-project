//ANCHOR Usering and Calling Model
const config = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  dialectOptions: {
    charset: config.dialectOptions.charset,
    collate: config.dialectOptions.collate,
  },
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
  logging: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model")(sequelize, Sequelize);
db.role = require("../models/role.model")(sequelize, Sequelize);
db.course = require("../models/course.model")(sequelize, Sequelize);
db.categories = require("../models/category.model")(sequelize, Sequelize);
db.tag = require("../models/tag.model")(sequelize, Sequelize);
db.cart = require("../models/cart.mode")(sequelize, Sequelize);
db.request = require("../models/request.mode")(sequelize, Sequelize);

//NOTE have Roles (many-to-many)
db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId",
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
});
db.ROLES = ["user", "admin", "tutor"];

//NOTE User own Course (one-to-many)
db.user.hasMany(db.course, { foreignKey: "tutorId", as: "courses" });
db.course.belongsTo(db.user, {
  foreignKey: "tutorId",
  as: "user",
});

//SECTION Tag and Categories and Tag
//REVIEW Course has Categories (one-to-many)
db.categories.hasMany(db.course, { as: "courses" });
db.course.belongsTo(db.categories, {
  foreignKey: "categoryId",
  as: "categories",
});

//REVIEW Tag has Categories (one-to-many)
db.categories.hasMany(db.tag, { as: "tag" });
db.tag.belongsTo(db.categories, {
  foreignKey: "categoryId",
  as: "categories",
});

// //REVIEW Course have Tag (many-to-many)
db.course.belongsToMany(db.tag, {
  through: "tag_course",
  foreignKey: "courseId",
  otherKey: "tagId",
});
db.tag.belongsToMany(db.course, {
  through: "tag_course",
  foreignKey: "tagId",
  otherKey: "courseId",
});

//SECTION Request and Categories and Tag
//REVIEW Request have Tag (many-to-many)
db.request.belongsToMany(db.tag, {
  through: "tag_request",
  foreignKey: "requestId",
  otherKey: "tagId",
});
db.tag.belongsToMany(db.request, {
  through: "tag_request",
  foreignKey: "tagId",
  otherKey: "requestId",
});

//REVIEW Request has Categories (one-to-many)
db.categories.hasMany(db.request, { as: "requests" });
db.request.belongsTo(db.categories, {
  foreignKey: "categoryId",
  as: "categories",
});

module.exports = db;
