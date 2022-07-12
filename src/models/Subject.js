const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection");
// import referencee

class Subject extends Model {}

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
  modelName: "subject",
};

Subject.init(schema, options);

module.exports = Subject;
