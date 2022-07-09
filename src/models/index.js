const Ads = require("./Ads");
const Invitations = require("./invitations");
const Price = require("./Price");
const Responses = require("./Responses");
const Students = require("./Students");
const Subjects = require("./Subjects");
const Tutors = require("./Tutors");
const TutorSubjects = require("./TutorSubjects");

module.exports = {
  Ads,
  Invitations,
  Price,
  Responses,
  Students,
  Subjects,
  Tutors,
  TutorSubjects,
};

// associations
Tutors.belongsToMany(TutorSubjects, {
  through: {
    model: Subjects,
  },
});

TutorSubjects.belongsToMany(Tutors, {
  through: {
    model: Subjects,
  },
});

Tutors.belongsToMany(Price, {
  through: {
    model: Subjects,
  },
});

Subjects.belongToOne();
