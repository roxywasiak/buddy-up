const { Tutor } = require("../models");

const tutorData = [
  {
    firstName: "Shirts",
    lastName: "",
    email: "",
    password: "",
    location: "",
    lat: "",
    long: "",
    price: "",
    isRemotes: "",
    calendlyLink: "",
  },
];

const seedCategories = () => Tutor.bulkCreate(tutorData);

module.exports = seedCategories;
