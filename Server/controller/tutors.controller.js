const db = require("../models");
const User = db.user;
const Role = db.role;
const Tutor = db.tutorInfo;

const Op = db.Sequelize.Op;

exports.signup = async (req, res) => {
  const userId = req.params.id;
  try {
    const exit_mail = await Tutor.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (exit_mail) {
      res.status(400).send({
        message: "Failed! Email is already in use!",
      });
      return;
    } else {
      await Tutor.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        major: req.body.major,
        experience: req.body.exp,
        date_of_birth: req.body.dob,
        userId: userId,
        lineId: req.body.lineId,
      });
      const addRoleToNew = await User.findByPk(userId);
      // console.log(userId, addRoleToNew);
      const roleId = await Role.findAll({
        where: {
          name: {
            [Op.or]: ["tutor"],
          },
        },
      });
      await addRoleToNew.addRoles(roleId);
      res.send({ message: "Success!" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
