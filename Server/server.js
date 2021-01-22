const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
const http = require("http").Server(app);
const user = require("../Server/controller/user.controller");
const corsOptions = {
  origin: "http://localhost:8081/",
};
// parse requests of content-type - application/json
app.use(bodyParser.json());
// app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//default page API
app.use("/", express.static(path.join(__dirname, "public")));
// // simple route
app.get("/message", (req, res) => {
  res.json({ message: "Welcome to SUT Tutors Application." });
});

// routes
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);
require("./routes/course.routes")(app);
require("./routes/request.routes")(app);
require("./routes/join.routes")(app);
require("./routes/take.routes")(app);
require("./routes/enroll.router")(app);
require("./routes/attendance.router")(app);
require("./routes/search.router")(app);
//Connect to database by calling models
const db = require("./models");
const Role = db.role;
const Categories = db.categories;

db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and Resync Db");
//   initial();
// });

// set port, listen for requests
const PORT = process.env.PORT || 3986;
http.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}\n`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user",
  });

  Role.create({
    id: 2,
    name: "tutor",
  });

  Role.create({
    id: 3,
    name: "admin",
  });

  Categories.create({
    id: 1,
    name: "General Education",
  });

  Categories.create({
    id: 2,
    name: "Management Technology",
  });

  Categories.create({
    id: 3,
    name: "Engineering",
  });
  Categories.create({
    id: 4,
    name: "Digital Technology",
  });
  Categories.create({
    id: 5,
    name: "Science",
  });
  Categories.create({
    id: 6,
    name: "Agricultural Technology",
  });
  Categories.create({
    id: 7,
    name: "Foreign Languages",
  });
  Categories.create({
    id: 8,
    name: "Medicine",
  });
  Categories.create({
    id: 9,
    name: "Nurse",
  });
  Categories.create({
    id: 10,
    name: "Dentistry",
  });
  Categories.create({
    id: 11,
    name: "Public Health",
  });
}
