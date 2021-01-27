//NOTE
const { authJwt } = require("../middleware");
const controller = require("../controller/request.controller");

module.exports = function (app) {
    //   app.use(function (req, res, next) {
    //     res.header(
    //       "Access-Control-Allow-Headers",
    //       "x-access-token, Origin, Content-Type, Accept"
    //     );
    //     next();
    //   });
  
    app.get(
      "/api/request/findAll",
      // [authJwt.verifyToken],
      controller.findAllRequest
    );
  
    app.get(
      "/api/request/findOne/:id",
      // [authJwt.verifyToken],
      controller.findOneRequest
    );
  
    app.put(
      "/api/request/update/:id",
      // [authJwt.verifyToken, authJwt.isTutor],
      controller.updateRequest
    );
  
    app.post(
      "/api/request/create",
      // [authJwt.verifyToken, authJwt.isTutor],
      controller.createRequest
    );
  
    app.delete(
      "/api/request/delete/:id",
      // [authJwt.verifyToken, authJwt.isTutor],
      controller.deleteRequest
    );
    app.post(
      "/api/request/tag",
      // [authJwt.verifyToken, authJwt.isTutor],
      controller.RequestTag
    );
    
  };
  