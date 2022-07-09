const Ad = require("./Ad");
const Invitation = require("./Invitation");
const Price = require("./Price");
const Response = require("./Response");
const Student = require("./Student");
const Subject = require("./Subject");
const Tutor = require("./Tutor");
const TutorSubject = require("./TutorSubject");

// associations
Tutor.hasMany(Price, {
  foreignKey: "price",
  onDelete: "CASCADE",
});

Price.belongsTo(Tutor, {
  foreignKey: "price",
  onDelete: "CASCADE",
});

Tutor.belongsToMany(Student, {
  through: Invitation,
  foreignKey: "senderId",
});

Student.belongsToMany(Tutor, {
  through: Invitation,
  foreignKey: "senderId",
});

Tutor.belongsToMany(Subject, {
  through: Ad,
  foreignKey: "subjectId",
});

Subject.belongsToMany(Tutor, {
  through: Ad,
  foreignKey: "subjectId",
});

Student.belongsToMany(Subject, {
  through: Ad,
  foreignKey: "subjectId",
});

Subject.belongsToMany(Student, {
  through: Ad,
  foreignKey: "subjectId",
});

Student.hasMany(Price, {
  foreignKey: "budget",
  onDelete: "CASCADE",
});

Price.belongsTo(Student, {
  foreignKey: "budget",
  onDelete: "CASCADE",
});

// INVITATION RELATIONSHIP JUNCTION TABLE
Student.hasMany(Invitation, {
  foreignKey: "senderId",
  onDelete: "CASCADE",
});

Invitation.belongsTo(Student, {
  foreignKey: "senderId",
  onDelete: "CASCADE",
});

Student.belongsToMany(Tutor, {
  through: Invitation,
  foreignKey: "tutorRecieverId",
});

Tutor.belongsToMany(Student, {
  through: Invitation,
  foreignKey: "tutorRecieverId",
});

Student.belongsToMany(Subject, {
  through: Invitation,
  foreignKey: "studentRecieverId",
});

Subject.belongsToMany(Student, {
  through: Invitation,
  foreignKey: "studentRecieverId",
});

Invitation.HasMany(Subject, {
  foreignKey: "subjectId",
  onDelete: "CASCADE",
});

Subject.belongsTo(Invitation, {
  foreignKey: "subjectId",
  onDelete: "CASCADE",
});
// Ad associations
Tutor.hasMany(Ad, {
  foreignKey: "tutorId",
  onDelete: "CASCADE",
});

Ad.belongsTo({
  foreignKey: "tutorId",
  onDelete: "CASCADE",
});

Student.hasMany(Ad, {
  foreignKey: "studentId",
  onDelete: "CASCADE",
});

Ad.belongsTo(Student, {
  foreignKey: "studentId",
});

Subject.hasMany(Ad, {
  foreignKey: "subjectId",
  onDelete: "CASCADE",
});

Ad.belongsTo(Subject, {
  foreignKey: "subjectId",
  onDelete: "CASCADE",
});

// Tutor Subject
Subject.belongsToMany(Tutor, {
  through: {
    model: TutorSubject,
  },
});

Tutor.belongsToMany(Subject, {
  through: {
    model: TutorSubject,
  },
});

// RESPONSE RELAIONSHIP
Ad.belongsToMany(Tutor, {
  through: {
    model: Response,
  },
  foreignKey: "addId",
});

Tutor.belongsToMany(Ad, {
  through: {
    model: Response,
  },
  foreignKey: "addId",
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
