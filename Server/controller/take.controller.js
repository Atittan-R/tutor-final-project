//TODO
const express = require("express");
const app = express();
const db = require("../models");
const Take = db.take;
const Request = db.request;
const Course = db.course;
const Tag = db.tag;
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
      day: resquest.date,
      time_start: resquest.time_start,
      time_end: resquest.time_end,
      duration: req.body.duration,
      lat: req.body.lat,
      amount: req.body.amount,
      long: req.body.long,
      tutorId: req.body.tutorId,
      categoryId: resquest.categoryId,
    });

    // res.status(200).send(createCourse);
    if (req.body.tagname) {
      for (i = 0; i < req.body.tagname.length; i++) {
        const tag = await Tag.create({
          name: req.body.tagname[i],
          courseId: createCourse.id,
          categoryId: createCourse.categoryId,
        });
        createCourse.setTags(tag);
      }
    }

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

    //This line have to send respone to noti (createCourse.id)
    const result = await Take.findByPk(take.id);
    res.status(200).send(result);
  } else {
    res.status(401).send("This Request have been taken!!");
  }
};
