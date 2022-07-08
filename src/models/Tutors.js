const { Model, DataTypes, STRING } = require("sequelize");

const connection = require("../config/connection");

class Tutor extends Model {}

Tutor.init({
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
    validate: {
      len: [8],
    },
  },
  socialMedia: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  calendlyLink: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  price: {
    type: DataTypes.DECIMAL(8, 2),
    allowNull: false,
    validate: {
      isDecimal: true,
    },
  },
  isRemote: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lat: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  long: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Tutors;
