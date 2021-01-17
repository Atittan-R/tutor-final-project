const { authJwt } = require("../middleware");
const controller = require("../controller/attendance.controller");
module.exports = function (app) {
  //   app.use(function (req, res, next) {
  //     res.header(
  //       "Access-Control-Allow-Headers",
  //       "x-access-token, Origin, Content-Type, Accept"
  //     );
  //     next();
  //   });

  app.post(
    "/api/attendance",
    // [authJwt.verifyToken],
    controller.attenDance
  );
  app.get(
    "/api/selete/attendance",
    // [authJwt.verifyToken],
    controller.seleteAttenDance
  );

  // app.delete(
  //   "/api/cancel/enroll",
  //   // [authJwt.verifyToken],
  //   controller.cancelEnRoll
  // );
};
