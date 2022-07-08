const { Model, DataTypes } = require("sequelize");
const { model } = require("../config/connection");

const connection = require("../config/connection");

class Price extends Model {}

Price.init({
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
      key,
    },
    validate: {
      isDecimal: true,
    },
  },
});

module.exports = Price;
