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
                },

                {
                    model: Request,
                    include:[
                        {  model:User,
                          as: "user",
                       },
                       {  model:User,
                          as: "join_users",
                          attributes:[[Sequelize.fn("COUNT", "requestId"), "joinCount"]],
                          through: {
                              attributes: [],
                            },
                       }
                      ]
                },
            ],
        })
       
        
        res.status(200).send({ searchTag });
        

    } catch (err) {
        res.status(500).send({ message: err.message });
    }

}

exports.recommended = async (req, res) => {
    try {
        const teg = await Tag.findAll({
            limit: 5,
            // distinct: "name",
            attributes: {
                include:
                    ["name",[Sequelize.fn("COUNT", "name"), "TagCount"],
                
                    ],
                    
            },


            group: ["name"],
            order: [[Sequelize.col('TagCount'), 'DESC']]

        })
        res.status(201).send(teg)
    } catch (err) {
        res.status(500).send({ message: err.message });
    }


}
exports.searchCourse = async (req, res) => {

    try {
        if(req.body.searchQuerying.length>0){
            const  course = await Course.findAll({where:{
                name:
                {
                    [Op.regexp]: '^' + req.body.searchQuerying
                }
            },
            
                attributes: [   
                    "id",
                    "name",
                    "day",
                    "time_start",
                    "time_end",
                    "duration",
                    "amount",
                    "lat",
                    "long",
                    "distance",
                    "createdAt",
                    "description",
                    "rate",
                    "courseAvatar"],
                include:[
                  {  model:User,
                    as: "tutors",
                 }
    
                ]
            }
            
                )
                res.status(201).send(course)
        }else{
            res.status(404).send("not fond")
        }
       
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}


exports.searchRequest = async (req, res) => {

    try {
        if(req.body.searchQuerying.length>0){
        const  request = await Request.findAll(
            {where:{
                name:
                {
                    [Op.regexp]: '^' + req.body.searchQuerying
                }
            },
            
                attributes: ["id","name","description","time_start","time_end"],
                include:[
                    {  model:User,
                        as: "user",
                    },
                    {  model:User,
                        as: "join_users",
                        attributes:[[Sequelize.fn("COUNT", "requestId"), "joinCount"]],
                        through: {
                            attributes: [],
                        },
                    }
                ]
            }
        
        )
        let condition = request.map((i)=> i.id)

        if(condition[0] === null){
            res.status(201).send([])
        }else{
            res.status(201).send(request)
        }

        }else{
            res.status(404).send("not fond")
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
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

exports.findtag = async (req, res) => {
    try {
        const teg = await Tag.findAll({
            limit: 10,
            attributes: ["id"],
            through: {
                attributes: [],
            },

            where: {
                name:req.body.tag

            },
            include: [

                {
                    model: Course,
                    attributes: [   
                    "id",
                    "name",
                    "day",
                    "time_start",
                    "time_end",
                    "duration",
                    "amount",
                    "lat",
                    "long",
                    "distance",
                    "createdAt",
                    "description",
                    "rate",
                    "courseAvatar"],
                    through: {
                        attributes: [],

                    },

                },

                {
                    model: Request,
                    as:"requests",
                    attributes: ["id","name","description","time_start","time_end"],
                    include:[
                        {  model:User,
                          as: "user",
                       },
                      ]

                },
            ],



        })
        res.status(201).send(teg)
    } catch (err) {
        res.status(500).send({ message: err.message });
    }


}