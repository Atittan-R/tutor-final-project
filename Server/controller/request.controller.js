const db = require("../models");
const config = require("../config/auth.config");
const { user } = require("../models");
const Request = db.request;
const Tag = db.tag;
const User = db.user;
const Categorie=db.categories
const Sequelize = require('sequelize');
const Course=db.course
const Op = db.Sequelize.Op;

exports.createRequest =async (req, res) => {
  //Save Request Data to Database
 
  const requset = await Request.create({
    name: req.body.name,
    date: req.body.date,
    time_start: req.body.time_start,
    time_end: req.body.time_end,
    description: req.body.description,
    categoryId: req.body.categoryId,
    userId: req.body.userId,
    status: "Available",
  });
  
    //Set Tag to tag table
    console.log(req.body.tagname.length);
      if (req.body.tagname) {
        for (i = 0; i < req.body.tagname.length; i++) {
          const tag=await  Tag.create({
            name: req.body.tagname[i],
            requestId: requset.id,
            categoryId: requset.categoryId,
          })
          //  console.log(requset.id,tag.id);
          requset.addTag(tag)
        }
        res.status(201).send({
          request: requset,
          message: "Request was registered successfully!",
        });
       
      } else {
        res.status(404).send({
          message: "Not found Tagname !!!",
        });
      }

};

exports.findAllRequest = (req, res) => {
  Request.findAll({
    order: Sequelize.literal('createdAt DESC'),
    include: [
      {
        model: User,
        as: "user",
        // through: {
        //     attributes: ["name"],
        // },
      },
      {
        model: Categorie,

        as: "categories",
        attributes: ["id","name"],
        // through: {
        //     attributes: ["name"],
        // },
      },
      {
        model: Tag,
        as: "tag",
        attributes: ["name"],
          through: {
            attributes: [],
        },
      },
    ],
    // include: [
    //   {
    //     model: Categorie,

    //     as: "categories",
    //     attributes: ["name"],
    //     // through: {
    //     //     attributes: ["name"],
    //     // },
    //   },
    // ],
  })
    .then((request) => {
      res.status(202).send({ request });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findOneRequest = (req, res) => {
  const id = req.params.id;
  Request.findByPk(id)
    .then((request) => {
      res.status(202).send({ request });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.updateRequest = (req, res) => {
  const id = req.params.id;
  Request.findByPk(id)
    .then(() => {
      Request.update(
        {
          name: req.body.name,
          date: req.body.date,
          time_start: req.body.time_start,
          time_end: req.body.time_end,
          duration: req.body.duration,
          categoryId: req.body.categoryId,
          userId: req.body.userId,
        },
        { where: { id: id } }
      ).then((num) => {
        if (num == 1) {
          res.status(200).json({
            message: "request was updated successfully.",
          });
        } else {
          res.status(401).json({
            message: `Cannot update request with id=${id}. Maybe request was not found or req.body is empty!`,
          });
        }
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.deleteRequest = (req, res) => {
  const id = req.params.id;
  Request.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).json({
          message: "request was delete successfully.",
        });
        Course.destroy({
          // ทำลายข้อมูล table url จาก id user
          where: { user_id: id },
        });
      } else {
        res.status(401).json({
          message: `Cannot delete request with id=${id}. Maybe request was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });

  

};

exports.RequestTag =async (req, res) => {
  const requestId=req.body.requestId
   tag=await Request.findByPk(requestId,{
    include: [
      {
        model: Tag,
        as: "tag",
        attributes: ["name"],
        through: {
            attributes: [],
        },
      },
    ],
   })
   res.send(tag)
}

exports.matchingCourse = async (req, res) => {
  console.log("time_start" ,(req.body.time_start).split(":"));
  let time=(req.body.time_start).split(":")
  let hours_start=parseInt(time[0])-2
  let hours_end=parseInt(time[0])+2
  const time_start=hours_start.toString()+":"+time[1]
  const time_end=hours_end.toString()+":"+time[1]
  // console.log(hours.toString()+":"+time[1])
  try {
      if(req.body.name.length>0){
          const  course = await Course.findAll({where:{
            [Op.and]:  [
             { name:
              {
                  [Op.regexp]: '^' + req.body.name
              }
            },

             { time_start:{
                [Op.between]:[time_start,time_end],
              }
            },{
              day:{
                [Op.substring]:req.body.day
              }
            },
            {
              categoryId:{
                [Op.substring]:req.body.category
              }
            }
            ]
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
                  "categoryId",
                  "courseAvatar"],
              include:[
                {  model:User,
                  as: "tutors",
                  attributes:["username"]
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