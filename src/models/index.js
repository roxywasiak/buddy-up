const Ads = require("./Ads");
const Invitations = require("./Invitation");
const Price = require("./Price");
const Responses = require("./Response");
const Students = require("./Student");
const Subjects = require("./Subject");
const Tutors = require("./Tutor");
const TutorSubjects = require("./TutorSubject");

// associations

Tutors.hasMany(Price, {
  foreignKey: "price",
  onDelete: "CASCADE",
});

Price.belongsTo(Tutors, {
  foreignKey: "price",
  onDelete: "CASCADE",
});

Tutors.belongsToMany(Students, {
  through: Invitations,
  foreignKey: "senderId",
});

Tutors.belongsToMany(TutorSubjects, {
  through: Ads,
  foreignKey: "subjectId",
});

Students.hasMany(Price, {
  foreignKey: "budget",
  onDelete: "CASCADE",
});

Price.belongsTo(Students, {
  foreignKey: "budget",
  onDelete: "CASCADE",
});

Students.belongsToMany(Tutors, {
  through: Invitations,
  foreignKey: "tutorRecieverId",
});

Tutors.belongsToMany(Students, {
  through: Invitations,
  foreignKey: "tutorRecieverId",
});

Students.belongsToMany(Subjects, {
  through: Invitations,
  foreignKey: "studentRecieverId",
});

Subjects.belongsToMany(Students, {
  through: Invitations,
  foreignKey: "studentRecieverId",
});

// Students.hasMany(Subjects, {
//   through: {
//     model: Invitations,
//   },
//   foreignKey: "subjectId",
//   onDelete: "CASCADE",
// });

// Students.belongsTo(Subjects, {
//   through: {
//     model: Invitations,
//   },
//   foreignKey: "subjectId",
//   onDelete: "CASCADE",
// });

Students.belongsToMany(Subjects, {
  through: {
    model: Ads,
  },
  foreignKey: "id",
});

// Ads associations
Tutors.hasMany(Ads, {
  foreignKey: "tutorId",
  onDelete: "CASCADE",
});

Ads.belongsTo({
  foreignKey: "tutorId",
  onDelete: "CASCADE",
});

Students.hasMany(Ads, {
  foreignKey: "studentId",
  onDelete: "CASCADE",
});

Ads.belongsTo(Students, {
  foreignKey: "studentId",
});

Subjects.hasMany(Ads, {
  foreignKey: "subjectId",
  onDelete: "CASCADE",
});

Ads.belongsTo(Subjects, {
  foreignKey: "subjectId",
  onDelete: "CASCADE",
});

Subjects.belongsToMany(Tutors, {
  through: {
    model: TutorSubjects,
  },
});

Tutors.belongsToMany(Subjects, {
  through: {
    model: TutorSubjects,
  },
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
