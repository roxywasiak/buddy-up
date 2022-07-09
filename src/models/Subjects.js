const { addListener } = require("nodemon");
const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection");
// import references
const Students = require("./Students");
const Subjects = require("./Subjects");
const Tutors = require("./Tutors");
const TutorSubjects = require("./TutorSubjects");

class Subjects extends Model {}

Subjects.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      references: {
        model: Ads,
        foreignKey: "subjectId",
      },
    },
    subjectName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    details: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Subjects",
  }
);

module.exports = Subjects;
