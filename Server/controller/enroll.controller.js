const db = require("../models");
const User = db.user;
const Course = db.course;
const Sequelize = require("sequelize");

exports.enRoll = async (req, res) => {
  try {
    const userId = req.body.userId;
    const courseId = req.body.courseId;
    const course = await Course.findByPk(courseId, {
      attributes: {
        include: [
          [Sequelize.fn("COUNT", Sequelize.col("name")), "courseEnrollCount"],
        ],
      },
      include: [
        {
          model: User,
          attributes: ["id", "username"],
          as: "courseEnroll",
          through: {
            attributes: [],
          },
        },
      ],
    });

    const raw = await course.getCourseEnroll();
    const duplicate = raw[0];
    console.log("================course.dataValues====================");
    console.log(course.dataValues.courseEnrollCount);
    console.log("====================================");
    console.log("================course.amount====================");
    console.log(course.amount);
    console.log("====================================");
    console.log("================duplicate====================");
    console.log(duplicate);
    console.log("====================================");
    if (course.amount > course.dataValues.courseEnrollCount) {
      course.addCourseEnroll(userId, courseId);
      res.status(201).send({ status: "Success" });
    } else {
      res.status(401).send({ status: "Cannot Enroll Seat Already Full" });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.enRollHistory = async (req, res) => {
  const user_id = req.params.userid;
  try {
    const result = await Course.findAll({
      include: [
        {
          model: User,
          as: "courseEnroll",
          where: { id: user_id },
          attributes: ["username"],
          through: {
            attributes: [],
          },
        },
        {
          model: User,
          as: "tutors",
          attributes: ["username"],
        },
      ],
    });

    await res.status(201).send(result);
  } catch (error) {
    await res.status(500).send({ message: error.message });
  }
};

exports.seleteEnRoll = async (req, res) => {
  try {
    const userId = req.body.userId;
    const courseId = req.body.courseId;
    const course = await Course.findByPk(courseId, {
      // attributes: ["name","createdAt",[Sequelize.fn('DATE_FORMAT', Sequelize.col('createdAt'), '%H'), 'dates']],
      // attributes: ['id', [Sequelize.fn('day',Sequelize.col('courseEnroll.createdAt')), 'groupCreatedAt']],
      include: [
        {
          model: User,
          as: "courseEnroll",
          through: {
            attributes: [],
          },
        },
      ],
      // group: [Sequelize.fn('DAY', Sequelize.col('courseEnroll.createdAt'))]
      // group: ['groupCreatedAt']
      // group: [db.Sequelize.fn('day', db.Sequelize.col('courseEnroll.createdAt'))]
    });
    res.status(201).send(course.courseEnroll);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
exports.cancelEnRoll = async (req, res) => {
  try {
    const userId = req.body.userId;
    const courseId = req.body.courseId;
    const course = await Course.findByPk(courseId);
    course.removeCourseEnroll(userId, courseId);
    res.status(201).send({ status: "Success" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
