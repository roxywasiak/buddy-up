const Ad = require("./Ad");
const Invitation = require("./Invitation");
const Price = require("./Price");
const Response = require("./Response");
const Student = require("./Student");
const Subject = require("./Subject");
const Tutor = require("./Tutor");
const TutorSubject = require("./TutorSubject");

// Associations

// PRICE ASSOCIATIONS
Tutor.hasMany(Price, {
  foreignKey: "price",
  onDelete: "CASCADE",
});

Price.belongsTo(Tutor, {
  foreignKey: "price",
  onDelete: "CASCADE",
});

Student.hasMany(Price, {
  foreignKey: "budget",
  onDelete: "CASCADE",
});

Price.belongsTo(Student, {
  foreignKey: "budget",
  onDelete: "CASCADE",
});

// INVITATION JUNCTION TABLE
Student.hasMany(Invitation, {
  foreignKey: "studentId",
  onDelete: "CASCADE",
});
Invitation.belongsTo(Student, {
  foreignKey: "studentId",
  onDelete: "CASCADE",
});

Student.hasMany(Invitation, {
  foreignKey: "senderId",
  onDelete: "CASCADE",
});
Invitation.belongsTo(Student, {
  foreignKey: "senderId",
  onDelete: "CASCADE",
});

Tutor.belongsToMany(Student, {
  through: Invitation,
  foreignKey: "tutorRecieverId",
});
Student.belongsToMany(Tutor, {
  through: Invitation,
  foreignKey: "senderId",
});

Subject.belongsToMany(Student, {
  through: Invitation,
  foreignKey: "subjectId",
});
Student.belongsToMany(Subject, {
  through: Invitation,
  foreignKey: "senderId",
});

// AD JUNCTION TABLE
Tutor.belongsToMany(Subject, {
  through: Ad,
  foreignKey: "tutorId",
});

Subject.belongsToMany(Tutor, {
  through: Ad,
  foreignKey: "subjectId",
});

Student.belongsToMany(Subject, {
  through: Ad,
  foreignKey: "studentId",
});

Subject.belongsToMany(Student, {
  through: Ad,
  foreignKey: "subjectId",
});

Student.belongsToMany(Price, {
  through: Ad,
  foreignKey: "budgetId",
});

Price.belongsToMany(Student, {
  through: Ad,
  foreignKey: "budgetId",
});

Tutor.belongsToMany(Price, {
  through: Ad,
  foreignKey: "priceId",
});

Price.belongsToMany(Tutor, {
  through: Ad,
  foreignKey: "priceId",
});

// TUTOR-SUBJECT JUNCTION TABLE
Subject.belongsToMany(Tutor, {
  through: {
    model: TutorSubject,
  },
  foreignKey: "subjectId",
});

Tutor.belongsToMany(Subject, {
  through: {
    model: TutorSubject,
  },
  foreignKey: "tutorId",
});

// RESPONSE RELAIONSHIP
Ad.hasMany(Response, {
  foreignKey: "addId",
  onDelete: "CASCADE",
});

Ad.belongsTo(Response, {
  foreignKey: "addId",
  onDelete: "CASCADE",
});

Response.hasMany(Tutor, {
  foreignKey: "tutorId",
  onDelete: "CASCADES",
});

Tutor.belongsTo(Response, {
  foreignKey: "tutorId",
  onDelete: "CASCADES",
});

Response.hasMany(Student, {
  foreignKey: "studentId",
  onDelete: "CASCADES",
});

Student.belongsTo(Response, {
  foreignKey: "studentId",
  onDelete: "CASCADES",
});

module.exports = {
  Ad,
  Invitation,
  Price,
  Response,
  Student,
  Subject,
  Tutor,
  TutorSubject,
};
