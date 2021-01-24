const { Expo } = require("expo-server-sdk");
const expo = new Expo();
const db = require("../models");
const User = db.user;
const Request = db.request;
const Take = db.take;
const Token = db.token;

let savedPushTokens = [];

//inuse
const prepareReceiver = async (takeId) =>{
  try {
    //Define Target what take action that we should to send
    const target = await Take.findByPk(takeId);
    const targetData = target.get();

    //Find Request ID from target
    const request = targetData.requestId;

    //Find User who join this request (Receiver)
    const result = await Request.findByPk(request, {
      include: [
        {
          model: User,
          attributes: ["id","username"],
          as: "join_users",
          through: {
            attributes: [],
          },
        },
      ],
    });
    const receiver = result.join_users;
    let receiverData = result.join_users.map(tar => tar.username);

    //set array to null prepare for list user
    savedPushTokens = [];

    //compare token and userid ready to send
    for(let i=0; i < receiver.length; i++){
      const value = await Token.findAll({
        where: { userId: receiver.map(tar => tar.id)[i]},
        attributes: ["value"],
      })
      // console.log("id: ",receiver.map(tar => tar.id)[i])
      // console.log("value: ", value.map(v => v.value))
      let tk = value.map(v => v.value).join(",")
      const exists = savedPushTokens.find((t) => t === tk);
      if (!exists) {
        savedPushTokens.push(tk)
      }
    }

    return {target: receiverData.toString(), tokens: savedPushTokens.toString()};
  } catch (error) {
    return { message: error.message };
  }
}
exports.handlePushTokens = async (req, res) => {
  const body = req.body.body;
  const title = req.body.title;

  const target = await prepareReceiver(req.body.takeId);
  try {
    let notifications = [];
    for (let pushToken of savedPushTokens) {
      if (!Expo.isExpoPushToken(pushToken)) {
        console.error(`Push token ${pushToken} is not a valid Expo push token`);
        continue;
      }

      notifications.push({
        to: pushToken,
        sound: "default",
        title: title,
        body: body,
        data: { body },
      });
    }

    let chunks = expo.chunkPushNotifications(notifications);

    await (async () => {
      for (let chunk of chunks) {
        try {
          let receipts = await expo.sendPushNotificationsAsync(chunk);
          console.log(receipts);
        } catch (error) {
          console.error(error);
        }
      }
    })();
    res.status(201).send({ target: target, message: {title: title, body: body} });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
exports.saveToken = async (req, res) => {
  try {
    const token = req.body.token.value;
    const userId = req.body.token.user;
    const receiver = await User.findByPk(userId, {
      attributes: ["id"],
    });

    if (receiver) {
      Token.create({
        value: token,
        userId: receiver.get("id"),
      });

      res.send({
        message: `Received push token, ${token}`,
        receiver: receiver.get("token"),
      });
    } else {
      res.send({
        message: `No user`,
      });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

//unused
exports.sendPushNotification = async (req, res) => {
  //Take ID for define target to push message to them
  const takeId = req.body.takeId;
  try {
    //Define Target what take action that we should to send
    const target = await Take.findByPk(takeId);
    const targetData = target.get();

    //Find Request ID from target
    const request = targetData.requestId;

    //Find User who join this request (Receiver)
    const result = await Request.findByPk(request, {
      include: [
        {
          model: User,
          attributes: ["id"],
          as: "join_users",
          through: {
            attributes: [],
          },
        },
      ],
    });
    const receiver = result.join_users;

    //set array to null prepare for list user
    savedPushTokens = [];

    //compare token and userid ready to send
    for(let i=0; i < receiver.length; i++){
      const value = await Token.findAll({
        where: { userId: receiver.map(tar => tar.id)[i]},
        attributes: ["value"],
      })
      // console.log("id: ",receiver.map(tar => tar.id)[i])
      // console.log("value: ", value.map(v => v.value))
      let tk = value.map(v => v.value).join(",")
      const exists = savedPushTokens.find((t) => t === tk);
      if (!exists) {
        savedPushTokens.push(tk)
      }
    }

    res.status(201).send({target: savedPushTokens});
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
console.log(savedPushTokens)