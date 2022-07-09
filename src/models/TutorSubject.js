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
    foreignKey: true,
    references: {
      model: Tutor,
      key: "id",
    },
  },
  subjectId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    foreignKey: true,
    references: {
      model: Subject,
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
  modelName: "TutorSubject",
};

TutorSubject.init(schema, options);

module.exports = TutorSubject;
