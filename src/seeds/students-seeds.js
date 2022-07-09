const { student } = require("../models");

const studentData = [
  {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    location: "",
    lat: "",
    long: "",
    isRemotes: "",
  },
];

const seedCategories = () => Tutor.bulkCreate(studentData);

module.exports = seedCategories;
