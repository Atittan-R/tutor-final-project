//TODO
const controller = require("../controller/rate.controller");
module.exports = function (app) {
    
    app.post(
        "/api/create/rate",
        // [authJwt.verifyToken, authJwt.isTutor],
        controller.CreateRate
    );
      app.post(
        "/api/update/rate",
        // [authJwt.verifyToken, authJwt.isTutor],
        controller.Rated
      );
      app.get(
        "/test",
        // [authJwt.verifyToken, authJwt.isTutor],
        controller.test
      );
}