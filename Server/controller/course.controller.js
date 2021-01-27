const db = require("../models");
const Course = db.course;
const Tag = db.tag;
const User = db.user;
const Categories = db.categories;
const Sequelize = require('sequelize');

exports.createCourse = (req, res) => {
    //Save Course Data to Database
    Course.create({
        name: req.body.name,
        day: req.body.day,
        time_start: req.body.time_start,
        time_end: req.body.time_end,
        duration: req.body.duration,
        description: req.body.description,
        amount: req.body.amount,
        lat: req.body.lat,
        long: req.body.long,
        tutorId: req.body.userId,
        categoryId: req.body.categoryId,
        courseAvatar: req.body.courseAvatar ? req.body.courseAvatar : 0,
    })
        .then((course) => {
            if (req.body.tagname) {
                for (i = 0; i < req.body.tagname.length; i++) {
                    Tag.create({
                        name: req.body.tagname[i],
                        courseId: course.id,
                        categoryId: course.categoryId,
                    }).then((tag) => {
                        //Set Join table tag_course
                        course.setTags(tag).then(() => {
                            //Display Response
                        });
                    });
                }
                res.status(201).send({
                    course: course,
                    message: "Course was registered successfully!",
                });
            } else {
                res.status(404).send({
                    message: "Not found Tagname !!!",
                });
            }
        })
        .catch((err) => {
            res.status(500).send({message: err.message});
        });
};

exports.findAllCourse = async (req, res) => {
    try {
        const result = await Course.findAll({
            order: Sequelize.literal('createdAt DESC'),
            attributes: [
                "id",
                "name",
                "day",
                "time_start",
                "time_end",
                "duration",
                "amount",
                "lat",
                "long",
                "distance",
                "createdAt",
                "description",
                "rate",
                "courseAvatar",
            ],
            include: [
                {
                    model: Categories,
                    as: "CourseCate",
                    attributes: ["name"],
                },
                {
                    model: User,
                    as: "tutors",
                },
            ],
        });
        await res.status(201).send(result);
    } catch (err) {
        await res.status(500).send({message: err.message});
    }
};

exports.findCourseFromCategories = async (req, res) => {
    const cate = req.body.cate;
    try {
        const result = await Course.findAll({
            order: Sequelize.literal('createdAt DESC'),
            attributes: [
                "id",
                "name",
                "day",
                "time_start",
                "time_end",
                "duration",
                "amount",
                "lat",
                "long",
                "distance",
                "createdAt",
                "description",
                "rate",
                "courseAvatar",
            ],
            include: [
                {
                    model: Categories,
                    as: "CourseCate",
                    where: {name: cate},
                    attributes: ["name"],
                },
            ],
        });

        await res.status(201).send(result);
    } catch (err) {
        await res.status(500).send({message: err.message});
    }
};

exports.findOneCourse = async (req, res) => {
    const id = req.params.id;
    try{
        const course = await Course.findByPk(id, {
            attributes: [
                "id",
                "name",
                "day",
                "time_start",
                "time_end",
                "duration",
                "amount",
                "lat",
                "long",
                "distance",
                "createdAt",
                "description",
                "rate",
                "courseAvatar",
            ],
            include: [
                {
                    model: Categories,
                    as: "CourseCate",
                    attributes: ["name"],
                },
                {
                    model: User,
                    as: "tutors",
                },
            ],
        })
        res.status(202).send({course});
    }catch (e) {
        res.status(500).send({message: e.message});
    }

};

exports.updateCourse = (req, res) => {
    const id = req.params.id;
    Course.findByPk(id)
        .then((course) => {
            Course.update(
                {
                    name: req.body.name,
                    day: req.body.day,
                    time_start: req.body.time_start,
                    time_end: req.body.time_end,
                    duration: req.body.duration,
                    description: req.body.description,
                    lat: req.body.lat,
                    long: req.body.long,
                },
                {where: {id: id}}
            ).then((num) => {
                if (num == 1) {
                    res.status(200).json({
                        message: "course was updated successfully.",
                    });
                } else {
                    res.status(401).json({
                        message: `Cannot update course with id=${id}. Maybe course was not found or req.body is empty!`,
                    });
                }
            });
        })
        .catch((err) => {
            res.status(500).send({message: err.message});
        });
};

exports.deleteCourse = (req, res) => {
    const id = req.params.id;
    Course.destroy({
        where: {id: id},
    })
        .then((num) => {
            if (num == 1) {
                res.status(200).json({
                    message: "course was delete successfully.",
                });
                Course.destroy({
                    // ทำลายข้อมูล table url จาก id user
                    where: {user_id: id},
                });
            } else {
                res.status(401).json({
                    message: `Cannot delete course with id=${id}. Maybe course was not found or req.body is empty!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({message: err.message});
        });
};

exports.HomeCourse = async (req, res) => {
    const major = req.params.major;
    try{
        const findCateId = await Categories.findOne({
            where: {
                name: major,
            }})

        const Courses = await Course.findAll({
            order: Sequelize.literal('createdAt DESC'),
        })
        console.log(Courses)

        res.status(201).send({message: Courses});
    }catch (e){
        res.status(500).send({message: e.message})
    }

}