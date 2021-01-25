const Sequelize = require('sequelize');
const db = require("../models");
const Rate = db.rate_course
const Course = db.course
const Tutor = db.tutorInfo
exports.CreateRate = async (req, res) => {
    try {
        const rate = await Rate.findOrCreate({
           where: {
            userId: req.body.userId,
            courseId: req.body.courseId,
           },
           defaults:  { 
            userId: req.body.userId,
            courseId: req.body.courseId,
            rate: 0,
            status: "Not rate"}
        })
            res.status(200).send(rate[1])
        
    
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.test = async (req, res) => {
    try {
        res.status(200).send("hello world")
    } catch (error) {
        res.status(500).send(error.message)
    }
}
exports.Rated = async (req, res) => {
    try {

        const rateUpdate = await Rate.update({
            rate: req.body.rate,
            status: "Rated",
        },
            {
                where: {
                    courseId: req.body.courseId,
                    userId: req.body.userId
                },
            })

        const rate = await Rate.findAndCountAll({
            where: {
                status: "Rated",
                courseId: req.body.courseId,
            },
        })
        // res.status(200).send(rate)

        const courserate = (rate.rows
            .reduce(
                (sum, i) =>
                    sum + parseFloat(i.rate), 0)) / rate.count

        console.log(typeof (courserate));
        const courseupdate = await Course.update({
            rate: courserate,
            status: "Rated",
        },
            {
                where: {
                    id: req.body.courseId
                }
            })
        const tutor = await Course.findByPk(req.body.courseId)
        // res.status(200).send(tutor)
        const course = await Course.findAndCountAll({
            where: {
                status: "Rated",
                tutorId: tutor.tutorId
            },
        })
        console.log(tutor.tutorId);
        const tutorrate = (course.rows
            .reduce(
                (sum, i) =>
                    sum + parseFloat(i.rate), 0)) / course.count
        console.log(tutorrate);

        const updatratetutor = await Tutor.update({
            rate: tutorrate
        },
            {
                where: {
                    userId: tutor.tutorId

                }
            })
        res.status(200).send(updatratetutor)

    } catch (error) {
        res.status(500).send(error)
    }
}


