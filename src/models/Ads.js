const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection");
// import references
const Students = require("./Student");
const Subjects = require("./Subject");
const Tutors = require("./Tutor");
const TutorSubjects = require("./TutorSubject");
const tutorSubjects = require("./TutorSubject");

class Ads extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  studentId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Students,
      key: "id",
    },
  },
  tutorId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Tutors,
      key: "id",
    },
  },
  budget: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      isDecimal: true,
    },
    references: {
      model: Students,
      key: "budget",
    },
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  subjectId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Subjects,
      key: "id",
    },
  },
  tutorSubjectId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: TutorSubjects,
      key: "subjectId",
    },
  },
};

const options = {
  sequelize: connection,
  timestamps: true,
  underscored: false,
  freezeTableName: true,
  modelName: "Ads",
};

Ads.init(schema, options);

module.exports = Ads;