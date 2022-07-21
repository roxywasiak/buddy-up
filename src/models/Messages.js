const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection");
// import references
const Student = require("./Student");
const Tutor = require("./Tutor");

class Messages extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  studentSenderId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Student,
      key: "id",
    },
  },
  tutorSenderId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Tutor,
      key: "id",
    },
  },
  messageContent: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
};

const options = {
  sequelize: connection,
  timestamps: true,
  underscored: false,
  freezeTableName: true,
  modelName: "messages",
};

Messages.init(schema, options);

module.exports = Messages;
