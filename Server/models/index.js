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
  // logging: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model")(sequelize, Sequelize);
db.role = require("./role.model")(sequelize, Sequelize);
db.course = require("./course.model")(sequelize, Sequelize);
db.categories = require("./category.model")(sequelize, Sequelize);
db.tag = require("./tag.model")(sequelize, Sequelize);
db.cart = require("./cart.model")(sequelize, Sequelize);
db.request = require("./request.model")(sequelize, Sequelize);
db.cartitem = require("./cartItem.model")(sequelize, Sequelize);
db.take = require("./take.model")(sequelize, Sequelize);

//SECTION USER ROLES
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

//SECTION Tag and Categories
//REVIEW Course has Categories (one-to-many)
db.categories.hasMany(db.course, { as: "courses" });
db.course.belongsTo(db.categories, {
  foreignKey: "categoryId",
  as: "categories",
});

//REVIEW user has many request (one-to-many)
db.user.hasMany(db.request, { as: "request" });
db.request.belongsTo(db.user, {
  foreignKey: "userId",
  as: "user",
});

//REVIEW Tag has Categories (one-to-many)
db.categories.hasMany(db.tag, { as: "tag" });
db.tag.belongsTo(db.categories, {
  foreignKey: "categoryId",
  as: "categories",
});

//REVIEW Course have Tag (many-to-many)
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

//SECTION CART
//REVIEW Cart have Cart_Item (one-to-many)
db.cart.hasMany(db.cartitem, { as: "cart_items" });
db.cartitem.belongsTo(db.cart, {
  foreignKey: "cartId",
  as: "cart",
});

//NOTE Course have Cart_item (one-to-many)
db.course.hasMany(db.cartitem, { as: "cart_items" });
db.cartitem.belongsTo(db.course, {
  foreignKey: "courseId",
  as: "course",
});

//REVIEW User have Cart(one-to-one)
db.user.hasOne(db.cart, { as: "user" });

//SECTION Take Request to creat a Course
db.user.hasMany(db.take, { as: "take" });
db.take.belongsTo(db.user, {
  foreignKey: "userId",
  otherKey: "takeId",
  as: "user",
});

db.request.hasMany(db.take, { as: "take" });
db.take.belongsTo(db.request, {
  foreignKey: "requestId",
  otherKey: "takeId",
  as: "request",
});

db.course.hasMany(db.take, { as: "take" });
db.take.belongsTo(db.course, {
  foreignKey: "courseId",
  otherKey: "takeId",
  as: "course",
});

//SECTION User join Request
db.user.belongsToMany(db.request, {
  through: "join_request",
  foreignKey: "userId",
  as: "requests",
});
db.request.belongsToMany(db.user, {
  through: "join_request",
  foreignKey: "requestId",
  as: "join_users",
});
module.exports = db;
