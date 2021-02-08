const { authJwt } = require("../middleware");
const controller = require("../controller/user.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/user/findAll",
    // [authJwt.verifyToken],
    controller.findAllUser
  );

  app.get(
    "/api/user/findOne/:id",
    // [authJwt.verifyToken],
    controller.findOneUser
  );

    app.get(
    "/api/user/findProfile/:id",
    // [authJwt.verifyToken],
    controller.findProfile
  );


  app.post(
    "/api/edit/profile/",
    // [authJwt.verifyToken],
    controller.editProfile
  );

  app.get(
    "/user/role/:id",
    // [authJwt.verifyToken],
    controller.userrole
  );
  app.post(
    "/api/user/join",
    // [authJwt.verifyToken],
    controller.Userjoin
  );
  app.post(
    "/api/user/MyCourse",
    // [authJwt.verifyToken],
    controller.MyCourse
  );
};

// app.get("/api/test/all", controller.allAccess);

// app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

// app.get(
//   "/api/test/tutor",
//   [authJwt.verifyToken, authJwt.isTutor],
//   controller.tutorBoard
// );

// app.get(
//   "/api/test/admin",
//   [authJwt.verifyToken, authJwt.isAdmin],
//   controller.adminBoard
// );
