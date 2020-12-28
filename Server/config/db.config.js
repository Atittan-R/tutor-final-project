//Connection
module.exports = {
  HOST: "it2.sut.ac.th",
  DB: "project63_g1",
  USER: "project63_g1",
  PASSWORD: "758382",
  dialect: "mysql",
  pool: {
    max: 10,
    min: 1,
    acquire: 30000,
    idle: 10000,
  },
};