const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection");
// import references
const Student = require("./Student");
const Subject = require("./Subject");
const Tutor = require("./Tutor");

class Invitation extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  senderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Student,
      key: "id",
    },
  },
  studentId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Student,
      key: "id",
    },
  },
  tutorRecieverId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Tutor,
      key: "id",
    },
  },
  subjectId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Subject,
      key: "id",
    },
  },
  status: {
    type: DataTypes.ENUM("pending", "completed", "rejected"),
    allowNull: false,
  },
};

const options = {
  sequelize: connection,
  timestamps: true,
  underscored: false,
  freezeTableName: true,
  modelName: "Invitation",
};

Invitation.init(schema, options);

module.exports = Invitation;
