const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection");
// import references
const Price = require("./Price");
const Student = require("./Student");
const Subject = require("./Subject");

class Ad extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  studentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Student,
      key: "id",
    },
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  isTutor: {
    type: DataTypes.BOOLEAN,
    default: true,
  },
  priceId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Price,
      key: "id",
    },
  },
  description: {
    type: DataTypes.TEXT("long"),
    allowNull: false,
  },
  subjectId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Subject,
      key: "id",
    },
  },
};

const options = {
  sequelize: connection,
  timestamps: true,
  underscored: false,
  freezeTableName: true,
  modelName: "ad",
};

Ad.init(schema, options);

module.exports = Ad;
