const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection");
// import references
const Students = require("./Students");
const Tutors = require("./Tutors");

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
  recieverId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Students,
      key: "id",
      model: Tutors,
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
  isTutor: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
};

const options = {
  sequelize: connection,
  timestamps: true,
  underscored: false,
  freezeTableName: true,
  modelName: "invitations",
};

Invitations.init(schema, options);

module.exports = Invitations;
