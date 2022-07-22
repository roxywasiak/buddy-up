const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection");
// import references

const Ad = require("./Ad");
const Tutor = require("./Tutor");
const Student = require("./Student");

class Response extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  adId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Ad,
      key: "id",
    },
  },
  tutorId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Tutor,
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
  modelName: "response",
};

Response.init(schema, options);

module.exports = Response;
