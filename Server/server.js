const express = require("express");
const bodyParser = require("body-parser");
// const cors = require("cors");
const app = express();
const HOSTNAME = "it2.sut.ac.th";

// var corsOptions = {
//   origin: "http://localhost:3000",
// };
// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// // simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to SUT Tutors Application." });
});

//  // Require All Models
// const db = require('./app/models');
// const Role = db.role;

//Call Connect()
// db.mongoose
//     .connect(db.url, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then(() => {
//         initial();
//         console.log("Connected to the database!");
//     })
//     .catch(err => {
//         res.json({ message: "Welcome SUT Tutors Application." });
//         process.exit();
//     });

//Call Route to use api in app
// require("./app/routes/authen.route")(app);
// require("./app/routes/auth.route")(app);
// require("./app/routes/user.route")(app);

// set port, listen for requests
const PORT = process.env.HTTP_PORT || 3000;
// console.log(HOSTNAME, PORT);
app.listen(PORT, HOSTNAME, () => {
  console.log(`Server is running on port ${HOSTNAME} ${PORT}.`);
});

//Initial Role when start DB
// const initial = () => {
//     Role.collection.estimatedDocumentCount((err, count) => {
//         if (!err && count === 0) {
//             new Role({
//                 name: "user"
//             }).save(err => {
//                 if (err) {
//                     console.log("error", err);
//                 }

//                 console.log("added 'user' to roles collection");
//             });

//             new Role({
//                 name: "moderator"
//             }).save(err => {
//                 if (err) {
//                     console.log("error", err);
//                 }

//                 console.log("added 'moderator' to roles collection");
//             });

//             new Role({
//                 name: "admin"
//             }).save(err => {
//                 if (err) {
//                     console.log("error", err);
//                 }

//                 console.log("added 'admin' to roles collection");
//             });
//         }
//     });
// } //end initial //
