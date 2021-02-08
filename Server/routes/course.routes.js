const { authJwt } = require("../middleware");
const controller = require("../controller/course.controller");
module.exports = function (app) {
  //   app.use(function (req, res, next) {
  //     res.header(
  //       "Access-Control-Allow-Headers",
  //       "x-access-token, Origin, Content-Type, Accept"
  //     );
  //     next();
  //   });

  app.get(
    "/api/course/count/:id",
    // [authJwt.verifyToken],
    controller.countUser
  );

  app.get(
    "/api/course/findAll",
    // [authJwt.verifyToken],
    controller.findAllCourse
  );

  app.post(
    "/api/course/categories",
    // [authJwt.verifyToken],
    controller.findCourseFromCategories
  );

  app.get(
    "/api/course/findOne/:id",
    // [authJwt.verifyToken],
    controller.findOneCourse
  );

  app.put(
    "/api/course/update/:id",
    // [authJwt.verifyToken, authJwt.isTutor],
    controller.updateCourse
  );

  app.post(
    "/api/course/create",
    // [authJwt.verifyToken, authJwt.isTutor],
    controller.createCourse
  );

  app.delete(
    "/api/course/delete/:id",
    // [authJwt.verifyToken, authJwt.isTutor],
    controller.deleteCourse
  );

  app.get(
    "/api/course/home/:major",
    // [authJwt.verifyToken, authJwt.isTutor],
    controller.HomeCourse
  );

  app.get(
    "/api/course/recommend",
    // [authJwt.verifyToken, authJwt.isTutor],
    controller.CourseRecommend
  );

  // app.get(
  //   "/api/course/find/user",
  //   // [authJwt.verifyToken, authJwt.isTutor],
  //   controller.CouserfindAllUser
  // );
};
