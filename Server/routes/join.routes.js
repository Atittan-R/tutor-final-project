//TODO
const { verifySignUp } = require("../middleware");
const controller = require("../controller/join.controller");

module.exports = function (app) {
  //   app.use(function (req, res, next) {
  //     res.header(
  //       "Access-Control-Allow-Headers",
  //       "x-access-token, Origin, Content-Type, Accept"
  //     );
  //     next();
  //   });

  app.post(
    "/api/join",
    // [authJwt.verifyToken],
    controller.joinRequest
  );

  //find user who join in a coursea
  app.get(
    "/api/join/list/:requestid",
    // [authJwt.verifyToken],
    controller.joinUserList
  );

  app.get(
    "/api/join/findAll",
    // [authJwt.verifyToken],
    controller.joinfindAll
  );

  app.post(
    "/api/join/cancel",
    // [authJwt.verifyToken],
    controller.cancelJoin
  );
};
