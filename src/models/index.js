const Ad = require("./Ad");
const Review = require("./Review");
const Price = require("./Price");
const Response = require("./Response");
const Student = require("./Student");
const Subject = require("./Subject");
const Tutor = require("./Tutor");
const TutorSubject = require("./TutorSubject");

// Associations

// PRICE ASSOCIATIONS
Tutor.hasOne(Price, {
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

// reviews
Subject.hasMany(Review, {
  foreignKey: "subjectId",
  onDelete: "CASCADE",
});

Review.belongsTo(Subject, {
  foreignKey: "subjectId",
  onDelete: "CASCADE",
});

Review.hasMany(Tutor, {
  foreignKey: "tutorId",
  onDelete: "CASCADES",
});

Tutor.belongsTo(Review, {
  foreignKey: "tutorId",
  onDelete: "CASCADES",
});

Review.hasMany(Student, {
  foreignKey: "studentId",
  onDelete: "CASCADES",
});

Student.belongsTo(Review, {
  foreignKey: "studentId",
  onDelete: "CASCADES",
});

module.exports = {
  Ad,
  Review,
  Price,
  Response,
  Student,
  Subject,
  Tutor,
  TutorSubject,
};
