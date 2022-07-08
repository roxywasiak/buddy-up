const { Model, DataTypes, STRING } = require("sequelize");

const connection = require("../config/connection");

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
    },
    subjectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
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
