// import the response model
const { Responses } = require("../models");

// create the seeding data for the responses data
const responseData = [{}];

//fn to to create bulk responses
const seedCategories = () => Responses.bulkCreate(responseData);

// export the function
module.exports = seedCategories;
