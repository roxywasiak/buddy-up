const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection");
// import references
const Students = require("./Student");
const Subjects = require("./Subject");
const Tutors = require("./Tutor");

class Invitations extends Model {}

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
      model: Students,
      key: "id",
    },
  },
  studentRecieverId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Students,
      key: "id",
    },
  },
  tutorRecieverId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Tutors,
      key: "id",
    },
  },
  subjectId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Subjects,
      key: "id",
    },
  },
  status: {
    type: Sequelize.ENUM("pending", "completed", "rejected"),
    allowNull: false,
    validate: {
      isUrl: true,
    },
  },
};

const options = {
  sequelize: connection,
  timestamps: true,
  underscored: false,
  freezeTableName: true,
  modelName: "Invitations",
};

Invitations.init(schema, options);

module.exports = Invitations;
