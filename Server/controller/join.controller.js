//TODO
const db = require("../models");
const User = db.user;
const Request = db.request;

exports.joinRequest = async (req, res) => {
  const userId = req.body.userId;
  const requestId = req.body.requestId;

  User.findByPk(userId).then((user) => {
    Request.findByPk(requestId).then((request) => {
      request
        .addJoin_users(userId, requestId)
        .then((status) => {
          res.status(201).send({ status: "Success" });
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });
    });
  });
};

exports.joinUserList = async (req, res) => {
  const reqes = req.params.requestid;

  const result = await Request.findByPk(reqes, {
    attributes: [
      "id",
      "name",
      "time_start",
      "time_end",
      "duration",
      "description",
      "userId",
    ],
    include: [
      {
        model: User,
        attributes: ["id", "username"],
        as: "join_users",
        through: {
          attributes: [],
        },
      },
    ],
  });
console.log('====================================');
console.log(result);
console.log('====================================');
  await res.status(201).send(result.join_users);
};

exports.cancelJoin = (req, res) => {
  const userId = req.params.userid;
  const requestId = req.body.requestId;
  User.findByPk(userId).then((user) => {
    Request.findByPk(requestId).then((request) => {
      request
        .removeJoin_users(userId, requestId)
        .then((status) => {
          res.status(201).send({ status: "Success" });
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });
    });
  });
};
