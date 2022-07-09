const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection");
// import referencee

class Subjects extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  subjectName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  details: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

const options = {
  sequelize: connection,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "Subjects",
};

Subjects.init(schema, options);

module.exports = Subjects;
