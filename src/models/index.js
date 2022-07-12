const Ad = require("./Ad");
const Review = require("./Review");
const Price = require("./Price");
const Response = require("./Response");
const Student = require("./Student");
const Subject = require("./Subject");
const Tutor = require("./Tutor");
const TutorSubject = require("./TutorSubject");
const Report = require("./Report");

// Associations

// PRICE ASSOCIATIONS
Tutor.hasOne(Price, {
  foreignKey: "priceId",
  onDelete: "CASCADE",
});

Price.belongsTo(Tutor, {
  foreignKey: "priceId",
  onDelete: "CASCADE",
});

Student.hasMany(Price, {
  foreignKey: "priceId",
  onDelete: "CASCADE",
});

Price.belongsTo(Student, {
  foreignKey: "priceId",
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

Price.hasMany(Ad, {
  foreignKey: "priceId",
  onDelete: "CASCADE",
});

Ad.belongsTo(Price, {
  foreignKey: "priceId",
  onDelete: "CASCADE",
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
  onDelete: "CASCADE",
});

Tutor.belongsTo(Response, {
  foreignKey: "tutorId",
  onDelete: "CASCADE",
});

Response.hasMany(Student, {
  foreignKey: "studentId",
  onDelete: "CASCADE",
});

Student.belongsTo(Response, {
  foreignKey: "studentId",
  onDelete: "CASCADE",
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
  onDelete: "CASCADE",
});

Tutor.belongsTo(Review, {
  foreignKey: "tutorId",
  onDelete: "CASCADE",
});

Review.hasMany(Student, {
  foreignKey: "studentId",
  onDelete: "CASCADE",
});

Student.belongsTo(Review, {
  foreignKey: "studentId",
  onDelete: "CASCADE",
});

// Reports

Student.hasMany(Report, {
  foreignKey: "studentId",
  onDelete: "CASCADE",
});

Report.belongsTo(Student, {
  foreignKey: "studentId",
  onDelete: "CASCADE",
});

module.exports = {
  Ad,
  Review,
  Price,
  Response,
  Report,
  Student,
  Subject,
  Tutor,
  TutorSubject,
};
