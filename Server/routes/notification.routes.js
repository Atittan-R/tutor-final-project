const controller = require("../controller/notification.controller");
const { verifySignUp, verifyNoti } = require("../middleware");

module.exports = function (app) {
  //   app.use(function (req, res, next) {
  //     res.header(
  //       "Access-Control-Allow-Headers",
  //       "x-access-token, Origin, Content-Type, Accept"
  //     );
  //     next();
  //   });

  app.post(
    "/api/notification/push",
    // [authJwt.verifyToken],
    controller.sendPushNotification
  );

  //To get Token
  app.post(
    "/api/notification/token",
    // [authJwt.verifyToken],
    [verifyNoti.checkTokenExisted],
    controller.saveToken
  );

  //To push message
  app.post(
    "/api/notification/message",
    // [authJwt.verifyToken],
    controller.handlePushTokens
  );
};
