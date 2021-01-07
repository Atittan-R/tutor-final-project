//TODO
const controller = require("../controller/take.controller");
module.exports = function (app) {
    
    app.post(
        "/api/taked",
        // [authJwt.verifyToken, authJwt.isTutor],
        controller.takend
      );
}