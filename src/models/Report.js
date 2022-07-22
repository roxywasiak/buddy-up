const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection");
// import references
const Student = require("./Student");

class Report extends Model {}

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
  reportReason: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
};

const options = {
  sequelize: connection,
  timestamps: true,
  underscored: false,
  freezeTableName: true,
  modelName: "report",
};

Report.init(schema, options);

module.exports = Report;
