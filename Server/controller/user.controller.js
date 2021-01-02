const db = require("../models");
const config = require("../config/auth.config");

const User = db.user;
exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.tutorBoard = (req, res) => {
  res.status(200).send("Tutor Content.");
};

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
exports.editProfile = (req, res) => {
  const id = req.params.id;
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
