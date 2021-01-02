const db = require("../models");
const config = require("../config/auth.config");
const Course = db.course;
const User = db.user;
var jwt = require("jsonwebtoken");

exports.createCourse = (req, res) => {
  //Save Course Data to Database
  Course.create({
    name: req.body.name,
    day: req.body.day,
    time_start: req.body.time_start,
    time_end: req.body.time_end,
    duration: req.body.duration,
    price: req.body.price,
    lat: req.body.lat,
    long: req.body.long,
    tutorId: req.body.userId,
  })
    .then((course) => {
      res.send({ course });
      //   User.findByPk(res.userId).then((id) => {
      //     course.setTutorCourse(res.userId).then(() => {
      //       res.send({ course, message: "Create Course Success!" });
      //     });
      //   });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findAllCourse = (res, req) => {};
exports.findOneCourse = (res, req) => {};
exports.updateCourse = (res, req) => {};
exports.deleteCourse = (res, req) => {};
