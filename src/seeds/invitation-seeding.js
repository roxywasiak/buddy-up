// import the Invitations model
const { Invitations } = require("../models");

// create the seeding data for the invitations data
const invitationData = [
  {
    senderId: "",
    recieverId: "",
    status: "",
  },
];

//fn to to create bulk invitation
const seedCategories = () => Invitations.bulkCreate(invitationData);

// export the function
module.exports = seedCategories;
