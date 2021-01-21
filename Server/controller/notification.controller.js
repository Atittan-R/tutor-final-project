exports.sendPushNotification = (req, res) => {
  try {
    res.status(201).send({ message: "Hello World" });
  } catch (error) {
    res.status(500).send({ message: err.message });
  }
};
