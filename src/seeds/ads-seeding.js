// import the Ads model
const { Ads } = require("../models");

// create the seeding data for the ads
const adsData = [
  { userId: 1, budget: "high", description: "", isTutor: false, subjectId: 1 },
  { userId: 1, budget: "high", description: "", isTutor: true, subjectId: 6 },
  { userId: 1, budget: "high", description: "", isTutor: false, subjectId: 9 },
  { userId: 1, budget: "high", description: "", isTutor: false, subjectId: 6 },
];

//fn to to create bulk ads
const seedCategories = () => Ads.bulkCreate(adsData);

// export the function
module.exports = seedCategories;
