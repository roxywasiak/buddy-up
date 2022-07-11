const { Tutor } = require("../models");

const tutorData = [
  {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    socialMedia: "",
    calendlyLink: "",
    location: "",
    price: "",
    isRemotes: "",
    lat: "",
    long: "",
  },
];

const seedCategories = () => Tutor.bulkCreate(tutorData);

module.exports = seedCategories;
