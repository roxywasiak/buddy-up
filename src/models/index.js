const Ads = require("./Ads");
const Invitations = require("./invitations");
const Price = require("./Price");
const Responses = require("./Responses");
const Students = require("./Students");
const Subjects = require("./Subjects");
const Tutors = require("./Tutors");
const TutorSubjects = require("./TutorSubjects");

// associations
Tutors.belongsToMany(Subjects, {
  through: {
    model: TutorSubjects,
  },
});

Tutors.hasMany(Price, {
  foreignKey: "price",
  onDelete: "CASCADE",
});

Tutors.belongsToMany(Students, {
  through: Invitations,
  foreignKey: "senderId",
});

Tutors.hasMany(Ads, {
  foreignKey: "tutorId",
  onDelete: "CASCADE",
});

Tutors.belongsToMany(TutorSubjects, {
  through: {
    model: Ads,
  },
  foreignKey: "subjectId",
});
Students.hasMany(Price, {
  foreignKey: "budget",
  onDelete: "CASCADE",
});

Students.belongsToMany(Tutors, {
  through: Invitations,
  foreignKey: "tutorRecieverId",
});

// **
Students.belongsToMany(Subjects, {
  through: Invitations,
  foreignKey: "studentRecieverId",
});

Students.hasMany(Subjects, {
  through: {
    model: Invitations,
  },
  foreignKey: "subjectId",
  onDelete: "CASCADE",
});

Students.belongsToMany(Subjects, {
  through: {
    model: Ads,
  },
  foreignKey: "id",
});

Students.hasMany(Ads, {
  foreignKey: "studentId",
  onDelete: "CASCADE",
});

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
