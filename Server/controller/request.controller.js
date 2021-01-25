const db = require("../models");
const config = require("../config/auth.config");
const { user } = require("../models");
const Request = db.request;
const Tag = db.tag;
const User = db.user;
const Categorie=db.categories
exports.createRequest = (req, res) => {
  //Save Request Data to Database
  Request.create({
    name: req.body.name,
    date: req.body.date,
    time_start: req.body.time_start,
    time_end: req.body.time_end,
    description: req.body.description,
    categoryId: req.body.categoryId,
    userId: req.body.userId,
    status: "Available",
  })
    //Set Tag to tag table
    .then((request) => {
      if (req.body.tagname) {
        for (i = 0; i < req.body.tagname.length; i++) {
          Tag.create({
            name: req.body.tagname[i],
            requestId: request.id,
            categoryId: request.categoryId,
          }).then((tag) => {
            //Set Join table tag_request
            Request.setTags(tag).then(() => {});
          });
        }
        res.status(201).send({
          request: request,
          message: "Request was registered successfully!",
        });
      } else {
        res.status(404).send({
          message: "Not found Tagname !!!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
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