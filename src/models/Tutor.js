const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection");
const { hashPassword } = require("../hooks");
// import references
const Price = require("./Price");

class Tutor extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  socialMedia: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  calendlyLink: {
    type: DataTypes.STRING,
    validate: { isURL: true },
    allowNull: false,
  },

  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  priceId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Price,
      key: "id",
    },
  },
  isRemote: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  lat: {
    type: DataTypes.INTEGER,
    validate: {
      min: -90,
      max: 90,
    },
  },
  long: {
    type: DataTypes.INTEGER,
    validate: {
      min: -180,
      max: 180,
    },
  },
};

const options = {
  sequelize: connection,
  timestamps: true,
  freezeTableName: true,
  underscored: false,
  modelName: "tutor",
  hooks: {
    beforeCreate: hashPassword,
  },
};

Tutor.init(schema, options);

module.exports = Tutor;
