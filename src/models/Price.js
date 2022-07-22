const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection");

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
    allowNull: true,
    validate: {
      isDecimal: true,
    },
  },
  budget: {
    type: DataTypes.ENUM(["Low", "Medium", "High"]),
    allowNull: true,
  },
};

const options = {
  sequelize: connection,
  timestamps: false,
  freezeTableName: true,
  underscored: false,
  modelName: "price",
};

Price.init(schema, options);

module.exports = Price;
