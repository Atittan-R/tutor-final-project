const db = require("../models");
const User = db.user;
const Course = db.course;
const Sequelize = require('sequelize');

exports.attenDance = async (req, res) => {
    try {
        const userId = req.body.userId;
        const courseId = req.body.courseId;
        const course = await Course.findByPk(courseId)
       
            course.addAttenDance(userId, courseId)
            res.status(201).send({ status: "Success" })
      
       
    } catch (err) {
        res.status(500).send({ message: err.message });
    }

}

exports.seleteAttenDance = async (req, res) => {
    try {
        const userId = req.body.userId;
        const courseId = req.body.courseId;
        const course = await Course.findByPk(courseId, {
          
            attributes: ["name",[Sequelize.fn('day',Sequelize.col('courseEnroll.createdAt')), 'groupByDay']],
            include: [
                {
                    model: User,
                    attributes: ["id", "username",],
                    as: "attenDance",
                    through: {
                        attributes: [],
               
                    },
                  
                    group: ['groupByDay']
                },
            ],
        })
        res.status(201).send(course)
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