const { student } = require("../models");

const studentData = [
  {
    firstName: "Sarah",
    lastName: "Lee",
    email: "sarahlee@gmail.com",
    password: "",
    budget: "low",
    location: "",
    isRemote: "",
    lat: "",
    long: "",
  },
  {
    firstName: "Sam",
    lastName: "Smith",
    email: "samsmith@gmail.com",
    password: "",
    budge: "",
    location: "",
    isRemote: "",
    lat: "",
    long: "",
  },
  {
    firstName: "Jack",
    lastName: "Ross",
    email: "jackross@gmail.com",
    password: "",
    budge: "",
    location: "",
    isRemote: "",
    lat: "",
    long: "",
  },
  {
    firstName: "Jack",
    lastName: "Ross",
    email: "jackross@gmail.com",
    password: "",
    budge: "",
    location: "",
    isRemote: "",
    lat: "",
    long: "",
  },
  {
    firstName: "Paige",
    lastName: "Ris",
    email: "paigeris@gmail.com",
    password: "",
    budge: "medium",
    location: "",
    isRemote: "",
    lat: "",
    long: "",
  },
  {
    firstName: "Ris",
    lastName: "Jackson",
    email: "risjackson@gmail.com",
    password: "",
    budge: "high",
    location: "",
    isRemote: "",
    lat: "",
    long: "",
  },
];

const seedCategories = () => Student.bulkCreate(studentData);

module.exports = seedCategories;
