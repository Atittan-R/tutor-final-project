const { authJwt } = require("../middleware");
const controller = require("../controller/enroll.controller");
module.exports = function (app) {
  //   app.use(function (req, res, next) {
  //     res.header(
  //       "Access-Control-Allow-Headers",
  //       "x-access-token, Origin, Content-Type, Accept"
  //     );
  //     next();
  //   });

  app.post(
    "/api/enroll/course",
    // [authJwt.verifyToken],
    controller.enRoll
  );
  app.get(
    "/api/selete/enroll",
    // [authJwt.verifyToken],
    controller.seleteEnRoll
  );
  app.delete(
    "/api/cancel/enroll",
    // [authJwt.verifyToken],
    controller.cancelEnRoll
  );
};
