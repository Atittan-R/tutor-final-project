const db = require("../models");
const User = db.user;
const Course =db.course;
const Role = db.role;

exports.findAllUser = (req, res) => {
  User.findAll()
    .then((user) => {
      res.status(202).send({ user });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
exports.findOneUser = (req, res) => {
  const id = req.params.id;
  User.findByPk(id)
    .then((user) => {
      res.status(202).send({ user });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};


exports.findProfile = async (req, res) => {
  const id = req.params.id;
  var authorities = [];
  try{
    const user = await User.findByPk(id);
    const roles = await user.getRoles()
    for(let i = 0; i < roles.length; i++){
      authorities.push("ROLE_" + roles[i].name.toUpperCase());
    }
    res.status(200).send({user:{
      id: user.id,
      username: user.username,
      email: user.email,
      phonenumber: user.phonenumber,
      major: user.major,
      roles: authorities,
      avatar: user.avatar,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    }
  });
  }catch(e){
    res.send(e.message)
  }
  
}

exports.editProfile = (req, res) => {
  const id = req.body.id;
  User.findByPk(id)
    .then((user) => {
      User.update(
        {
          username: req.body.username,
          email: req.body.email,
          phonenumber: req.body.phonenumber,
          major: req.body.major,
        },
        {
          where: {
            id: id,
          },
        }
      ).then((num) => {
        if (num == 1) {
          res.status(200).json({
            message: "users was updated successfully.",
          });
        } else {
          res.status(401).json({
            message: `Cannot update users with id=${id}. Maybe User was not found or req.body is empty!`,
          });
        }
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.userrole = async (req, res) => {
  const id = req.params.id;
  const us = await User.findByPk(id, {
    attributes: ["id", "username"],
    include: [
      {
        model: db.role,
        as: "roles",
        attributes: ["id", "name"],
        through: {
          attributes: [],
        },
      },
    ],
  });

  res.send(us);
  await us.catch((err) => {
    res.status(500).send({ message: err.message });
  });
};

exports.Userjoin = async (req, res) => {
  const userId = req.body.userId;
  const userJoin = await User.findByPk(userId, {
    attributes: ["id", "username"],
    include: [
      {
        model: db.request,
        attributes: ["id", "name"],
        as: "requests",
        through: {
          attributes: [],
        },
      },
    ],
  });
  // console.log("====================================");
  // console.log(userJoin);
  // console.log("====================================");
  await res.status(201).send(userJoin.requests);
};


exports.MyCourse = async (req, res) => {
  const userId = req.body.userId
  const course= await Course.findAll({
    where:{
      tutorId:userId
    }
  })
  res.status(200).send(course)
}
// exports.allAccess = (req, res) => {
//   res.status(200).send("Public Content.");
// };

// exports.userBoard = (req, res) => {
//   res.status(200).send("User Content.");
// };

// exports.adminBoard = (req, res) => {
//   res.status(200).send("Admin Content.");
// };

// exports.tutorBoard = (req, res) => {
//   res.status(200).send("Tutor Content.");
// };
