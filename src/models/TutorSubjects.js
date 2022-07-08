const { Model, DataTypes, STRING } = require("sequelize");

const connection = require("../config/connection");
const Subjects = require("./Subjects");

class TutorSubjects extends Model {}

TutorSubjects.init(
  {
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
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    // underscored: true,
    modelName: "TutorSubjects",
  }
);

module.exports = Subjects;
