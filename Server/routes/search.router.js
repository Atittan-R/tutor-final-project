const { authJwt } = require("../middleware");
const controller = require("../controller/search.controller");
module.exports = function (app) {
  //   app.use(function (req, res, next) {
  //     res.header(
  //       "Access-Control-Allow-Headers",
  //       "x-access-token, Origin, Content-Type, Accept"
  //     );
  //     next();
  //   });

 
  app.get(
    "/api/search",
    // [authJwt.verifyToken],
    controller.search
  );
  app.get(
    "/api/recommended",
    // [authJwt.verifyToken],
    controller.recommended
  );
 
};