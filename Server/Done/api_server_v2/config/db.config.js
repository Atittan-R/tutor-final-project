// Connection
module.exports = {
  HOST: "it2.sut.ac.th",
  DB: "project63_g1",
  USER: "project63_g1",
  PASSWORD: "758382",
  dialect: "mysql",
  dialectOptions: {
    charset: "utf8",
    collate: "utf8_unicode_ci",
    useUTC: false, //for reading from database
      dateStrings: true,

      typeCast: function (field, next) { // for reading from database
        if (field.type === 'DATETIME') {
          return field.string()
        }
        return next()
      },
      timezone: "Asia/Bangkok",
  },
  pool: {
    max: 10,
    min: 1,
    acquire: 30000,
    idle: 10000,
  },
};

// module.exports = {
//   HOST: "localhost",
//   DB: "project63_g1",
//   USER: "root",
//   PASSWORD: "",
//   dialect: "mysql",

//   dialectOptions: {
//     charset: "utf8",
//     collate: "utf8_unicode_ci",
//     useUTC: false, //for reading from database
//       dateStrings: true,

//       typeCast: function (field, next) { // for reading from database
//         if (field.type === 'DATETIME') {
//           return field.string()
//         }
//         return next()
//       },
//       timezone: "Asia/Bangkok",
//   },
//   pool: {
//     max: 10,
//     min: 1,
//     acquire: 30000,
//     idle: 10000,
//   }

// };
