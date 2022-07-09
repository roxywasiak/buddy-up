const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection");

const Students = require("./Students");

class Price extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  price: {
    type: DataTypes.DECIMAL(8, 2),
    allowNull: false,
    references: {
      model: Students,
      key: "id",
    },
    validate: {
      isDecimal: true,
    },
  },
};

const options = {
  sequelize: connection,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "Price",
};

Price.init(schema, options);

module.exports = Price;
