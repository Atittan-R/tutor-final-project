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

 
  app.post(
    "/api/search",
    // [authJwt.verifyToken],
    controller.search
  );
  app.get(
    "/api/Tagrecommended",
    // [authJwt.verifyToken],
    controller.recommended
  );
  app.post(
    "/api/search/course",
    // [authJwt.verifyToken],
    controller.searchCourse
  );
  app.post(
    "/api/search/request",
    // [authJwt.verifyToken],
    controller.searchRequest
  );
};