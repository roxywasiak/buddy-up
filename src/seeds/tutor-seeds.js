const { Tutor } = require("../models");

const tutorData = [
  {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    location: "",
    lat: "",
    long: "",
    price: "",
    isRemotes: "",
    socialMedia: "",
    calendlyLink: "",
  },
];

const seedCategories = () => Tutor.bulkCreate(tutorData);

module.exports = seedCategories;
