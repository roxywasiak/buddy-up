const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection");
// import references
const Students = require("./Students");
const Subjects = require("./Subjects");
const Tutors = require("./Tutors");
const tutorSubjects = require("./TutorSubjects");

class Ads extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Students,
      key: "id",
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
  isTutor: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },

  subjectId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Subjects,
      key: "id",
      model: tutorSubjects,
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
