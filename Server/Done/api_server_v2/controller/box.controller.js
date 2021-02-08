const db = require("../models");
const Box = db.box;
const Sequelize = require('sequelize');

exports.BoxList = async (req, res) => {
    try {
        const list = await Box.findAll({
            where: {userId: req.params.userid},
            order: Sequelize.literal('createdAt DESC'),
            // limit: 1
        })
        res.status(202).send({box: list})
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};
exports.updateStatus = async (req, res) =>{
    const id = req.params.id;
    try {
        const status =Box.update(
            {status: "old"},
            {where: {id: id}}
        )
        if(status){
            res.status(202).json({
                message: "message update",
            });
        }else{
            res.status(404).json({
                message: "Message not found!",
            });
        }
    }catch (e) {
        res.status(500).send({ message: e.message });
    }
}
exports.deleteMessage = async (req, res) => {
    const message = req.body.boxId;
    try {
        const boxlist = await Box.destroy({
            where: {id: message},
        })

        if (boxlist) {
            res.status(202).json({
                message: "request was delete successfully.",
            });
        } else {
            res.status(401).json({
                message: `Message Not Found`,
            });
        }
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};

