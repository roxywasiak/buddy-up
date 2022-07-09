const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection");

const Subjects = require("./Subjects");
const Tutors = require("./Tutors");

class TutorSubjects extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  tutorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    foreignKey: true,
    references: {
      model: Tutors,
      key: "id",
    },
  },
  subjectId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    foreignKey: true,
    references: {
      model: Subjects,
      key: "id",
    },
    level: {
      DataTypes: STRING,
      allowNull: false,
      foreignKey: true,
    },
  },
};

const options = {
  sequelize: connection,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "TutorSubjects",
};

TutorSubjects.init(schema, options);

module.exports = TutorSubjects;
