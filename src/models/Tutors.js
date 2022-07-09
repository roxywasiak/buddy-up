const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection");
const { hashPassword } = require("../hooks");
// import references
const Price = require("./Price");

class Tutors extends Model {}

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
    validate: { isURL: true },
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
    foreignKey: true,
    references: {
      model: Price,
      key: "id",
    },
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
};

const options = {
  sequelize: connection,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "Tutors",
  hooks: {
    beforeCreate: hashPassword,
  },
};

Tutors.init(schema, options);

module.exports = Tutors;
