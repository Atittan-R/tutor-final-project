const db = require("../models");
const User = db.user;
const Course = db.course;
const Sequelize = require('sequelize');

exports.attenDance = async (req, res) => {
  try {
    const userId = req.body.userId;
    const courseId = req.body.courseId;
    const course = await Course.findByPk(courseId, {

      include: [
        {
          model: User,
          as: "courseEnroll",
          through: {
            attributes: [],
          },
        },
      ],

    });
    console.log(course.courseEnroll.map((i) => i.id));
    if (course.courseEnroll.map((i) => i.id).includes(userId)) {
      course.addAttenDance(userId, courseId)
      res.status(201).send({ status: "attendance class successfull" })

    } else {
      res.status(404).send({ status: "Please enroll !!" })

    }



  } catch (err) {
    res.status(500).send({ message: err.message });
  }

}

exports.seleteAttenDance = async (req, res) => {
  try {
    // const userId = req.body.userId;
    const courseId = req.body.courseId;
    const course = await Course.findByPk(courseId, {

      attributes: [],
      through: {
        attributes: [],

      },
      include: [

        {
          model: User,
          attributes: ["id", "username", "createdAt", /*[Sequelize.fn('day', Sequelize.col('attenDance.createdAt')), 'groupByDay']*/],
          as: "attenDance",
          through: {
            attributes: [],
          },

          // group: [Sequelize.fn('day', Sequelize.col('attenDance.createdAt'))]
        },

      ],
    })
    res.status(201).send(course.attenDance)
    course.map((i)=> i.groupByDay)
  } catch (err) {
    res.status(500).send({ message: err.message });
  }


}
// exports.cancelEnRoll = async (req, res) => {
//     try {
//         const userId = req.body.userId;
//         const courseId = req.body.courseId;
//         const course = await Course.findByPk(courseId)
//             course.removeCourseEnroll(userId, courseId)
//             res.status(201).send({ status: "Success" })   
//     } catch (err) {
//         res.status(500).send({ message: err.message });
//     }
// }