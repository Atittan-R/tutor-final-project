const db = require("../models");
const Token = db.token;

checkTokenExisted = (req, res, next) => {
  Token.findOne({
    where: { value: req.body.token.value },
  }).then((exit) => {
    if (exit) {
      Token.update(
        {
          userId: req.body.token.user,
        },
        {
          where: {
            value: req.body.token.value,
          },
        }
      );

      res.status(202).send({
        message: "Token is already in database Update user",
      });
      return;
    }
    next();
  });
};

const verifyNoti = {
  checkTokenExisted: checkTokenExisted,
};

module.exports = verifyNoti;
