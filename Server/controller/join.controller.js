//TODO
const { request } = require("../models");
const db = require("../models");
const User = db.user;
const Request = db.request;

exports.joinRequest = async (req, res) => {
  const userId = req.body.userId;
  const requestId = req.body.requestId;

  User.findByPk(userId).then((user) => {
    Request.findByPk(requestId).then((request) => {
      request
        .addUsers(userId, requestId)
        .then((status) => {
          res.status(201).send({ status: "Success" });
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });
    });
  });
};

exports.findJoinRequest = async (req, res) => {
  const us = await User.findByPk(req.params.id, {
    // attributes: ["id"],
    include: [
      {
        model: db.request,
        as: "requests",
        // attributes: ["id"],
      },
    ],
  });

  if (us) {
    res.status(201).send({ message: "Joined", result: us });
  } else {
    res
      .status(404)
      .send({
        message: "404 Data Not found (No User or No Request ID in database)",
      });
  }

  await us.catch((err) => {
    res.status(500).send({ message: err.message });
  });
};
