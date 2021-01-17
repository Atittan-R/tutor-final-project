const db = require("../models");
const User = db.user;
const Course = db.course;
const Tag = db.tag;
const Request = db.request;
const Sequelize = require('sequelize');
const { Op } = require("sequelize");
exports.search = async (req, res) => {
    try {
        const searchTag = await Tag.findAll({
            limit: 10,
            attributes: ['name'],
            through: {
                attributes: [],
            },

            where: {
                name:
                {
                    [Op.regexp]: '^' + req.body.searchQuerying

                }
            },
            include: [

                {
                    model: Course,
                    attributes: ["name", "id"],
                    through: {
                        attributes: [],

                    },

                },


            ],


        })
        if (!searchTag.length) {
            const searchCourse = await Course.findAll({
                limit: 10,
                attributes: ["name"],
                where: {
                    name:
                    {
                        [Op.regexp]: '^' + req.body.searchQuerying
                    }
                },
                include: [
                    {
                        model: Tag,
                        attributes: ["name", "id",],
                        through: {
                            attributes: [],

                        },
                    },
                ],
            })
            res.status(200).send({ searchCourse });
        } else {
            res.status(200).send({ searchTag });
        }

    } catch (err) {
        res.status(500).send({ message: err.message });
    }

}

exports.recommended = async (req, res) => {
    try {
        const teg = await Tag.findAll({

            distinct: "name",
            attributes: {
                include:
                    ["name",[Sequelize.fn("COUNT", "name"), "TagCount"],
                    ]
            },
            // attributes: [
            //     [Sequelize.literal('COUNT(DISTINCT(name))'), 'TagCount']
            //   ],
            // include: [
            //     {
            //         model: Course,
            //         attributes: ["name", "id"],
            //         through: {
            //             attributes: [],
            //         },
            //     },
            // ],

            group: ["name"],
            order: [[Sequelize.col('TagCount'), 'DESC']]

        })
        res.status(201).send(teg)
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