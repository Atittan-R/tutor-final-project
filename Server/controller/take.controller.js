//TODO
const db = require("../models");
const Take = db.take;
const Request = db.request;
const Course = db.course;

exports.takend = async (req, res) => {
  //create Take
  //  find Request by id
  const resquest = await Request.findByPk(req.body.requestId);
  if (resquest.status != "Taked") {
    const take = await Take.create({
      userId: req.body.tutorId,
      requestId: req.body.requestId,
      courseId: null,
    });

    // res.status(201).send({take})

    // update Request status="Taked"
    await Request.update(
      {
        status: "Taked",
      },
      {
        where: {
          id: req.body.requestId,
        },
      }
    );

    // createCourse
    const createCourse = await Course.create({
      name: resquest.name,
      day: req.body.day,
      time_start: resquest.time_start,
      time_end: resquest.time_end,
      duration: resquest.duration,
      price: req.body.price,
      lat: req.body.lat,
      long: req.body.long,
      tutorId: req.body.tutorId,
      categoryId: resquest.categoryId,
    });

    // update Take Table courseId= new courseId
    await Take.update(
      {
        courseId: createCourse.id,
      },
      {
        where: {
          id: take.id,
        },
      }
    );
  } else {
    res.status(401).send("kuy");
  }
};
