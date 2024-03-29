const Ad = require("./Ad");
const Review = require("./Review");
const Price = require("./Price");
const Response = require("./Response");
const Student = require("./Student");
const Subject = require("./Subject");
const Tutor = require("./Tutor");
const Messages = require("./Messages");

const TutorSubject = require("./TutorSubject");
const Report = require("./Report");

// Associations

// PRICE ASSOCIATIONS
Price.hasMany(Tutor, {
  foreignKey: "priceId",
  onDelete: "CASCADE",
});

Tutor.belongsTo(Price, {
  foreignKey: "priceId",
  onDelete: "CASCADE",
});

Student.belongsTo(Price, {
  foreignKey: "priceId",
  onDelete: "CASCADE",
});

Price.hasMany(Student, {
  foreignKey: "priceId",
  onDelete: "CASCADE",
});

// AD JUNCTION TABLE

Student.belongsToMany(Subject, {
  through: Ad,
  foreignKey: "studentId",
});

Ad.belongsTo(Subject, {
  foreignKey: "subjectId",
});

Ad.belongsTo(Student, {
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
  through: TutorSubject,
  foreignKey: "subjectId",
});

Tutor.belongsToMany(Subject, {
  through: TutorSubject,
  foreignKey: "tutorId",
});

// RESPONSE RELATIONSHIP
Ad.hasMany(Response, {
  foreignKey: "adId",
  onDelete: "CASCADE",
});

Response.belongsTo(Ad, {
  foreignKey: "adId",
  onDelete: "CASCADE",
});

Tutor.hasMany(Response, {
  foreignKey: "tutorId",
  onDelete: "CASCADE",
});

Response.belongsTo(Tutor, {
  foreignKey: "tutorId",
  onDelete: "CASCADE",
});

Student.hasMany(Response, {
  foreignKey: "studentId",
  onDelete: "CASCADE",
});

Response.belongsTo(Student, {
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

Tutor.hasMany(Review, {
  foreignKey: "tutorId",
  onDelete: "CASCADE",
});

Review.belongsTo(Tutor, {
  foreignKey: "tutorId",
  onDelete: "CASCADE",
});

Student.hasMany(Review, {
  foreignKey: "studentId",
  onDelete: "CASCADE",
});

Review.belongsTo(Student, {
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

// Messages
Student.belongsTo(Messages, {
  foreignKey: "studentId",
  onDelete: "CASCADE",
});

Messages.hasMany(Student, {
  foreignKey: "studentId",
  onDelete: "CASCADE",
});

Tutor.belongsTo(Messages, {
  foreignKey: "tutorId",
  onDelete: "CASCADE",
});

Messages.hasMany(Tutor, {
  foreignKey: "tutorId",
  onDelete: "CASCADE",
});

Response.hasMany(Messages, {
  foreignKey: "responseId",
  onDelete: "CASCADE",
});

Messages.belongsTo(Response, {
  foreignKey: "responseId",
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
  Messages,
};
