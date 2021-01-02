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
    description:req.body.description,
    price: req.body.price,
    lat: req.body.lat,
    long: req.body.long,
    tutorId: req.body.userId,
  })
    .then((course) => {
      res.status(201).send({ course });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findAllCourse = (req, res) => {
  Course.findAll()
    .then((course) => {
      res.status(202).send({ course });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
exports.findOneCourse = (req, res) => {
  const id = req.params.id;
  Course.findByPk(id)
    .then((course) => {
      res.status(202).send({ course });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
exports.updateCourse = (req, res) => {
  const id = req.params.id;
  // console.log("====================================");
  // console.log(id);
  // console.log("====================================");
  Course.findByPk(id)
    .then((course) => {
      Course.update({
        name: req.body.name,
        day: req.body.day,
        time_start: req.body.time_start,
        time_end: req.body.time_end,
        duration: req.body.duration,
        description: req.body.description,
        price: req.body.price,
        lat: req.body.lat,
        long: req.body.long,
      },
        { where: { id: id } })
      .then(num => {
          if (num == 1) {
            res.status(200).json({
              message: "course was updated successfully."
            });
          } else {
            res.status(401).json({
              message: `Cannot update course with id=${id}. Maybe course was not found or req.body is empty!`
            });
          }
        })
 
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });

};
exports.deleteCourse = (req, res) => {
  const id = req.params.id;
  Course.destroy({
    where: { id: id },
  }).then((num) => {
    if (num == 1) {
      res.status(200).json({
        message: "course was delete successfully.",
      });
      Url.destroy({
        // ทำลายข้อมูล table url จาก id user
        where: { user_id: id },
      });
    } else {
      res.status(401).json({
        message: `Cannot delete course with id=${id}. Maybe course was not found or req.body is empty!`,
      });
    }
  })
  .catch((err) => {
    res.status(500).send({ message: err.message });
  });
};
