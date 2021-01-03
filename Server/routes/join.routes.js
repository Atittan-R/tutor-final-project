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

  app.get(
    "/api/join/findOne/:id",
    // [authJwt.verifyToken],
    controller.findJoinRequest
  );
};
