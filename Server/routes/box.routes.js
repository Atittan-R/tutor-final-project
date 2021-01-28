const { authJwt } = require("../middleware");
const controller = require("../controller/box.controller");
module.exports = function (app) {
  //   app.use(function (req, res, next) {
  //     res.header(
  //       "Access-Control-Allow-Headers",
  //       "x-access-token, Origin, Content-Type, Accept"
  //     );
  //     next();
  //   });

  app.post(
    "/api/box/:userid",
    // [authJwt.verifyToken],
    controller.BoxList
  );

  app.post(
      "/api/box/read/:id",
      controller.updateStatus
  )
  app.delete(
    "/api/box/delete",
    // [authJwt.verifyToken],
    controller.deleteMessage
  );
};
