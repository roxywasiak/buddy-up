const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection");
const Subject = require("./Subject");
const Tutor = require("./Tutor");

class TutorSubject extends Model {}

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
    references: {
      model: Tutor,
      key: "id",
    },
  },
  subjectId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Subject,
      key: "id",
    },
  },
  level: {
    type: DataTypes.ENUM("beginner", "intermediate", "advanced"),
    defaultValue: "beginner",
    allowNull: true,
  },
};

const options = {
  sequelize: connection,
  timestamps: false,
  freezeTableName: true,
  underscored: false,
  modelName: "tutorSubject",
};

TutorSubject.init(schema, options);

module.exports = TutorSubject;
