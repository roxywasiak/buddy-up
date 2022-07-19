const bcrypt = require("bcrypt");
const { Model, DataTypes } = require("sequelize");
const connection = require("../config/connection");
const { hashPassword } = require("../hooks");
// import references

const Price = require("./Price");

class Tutor extends Model {
  getUser() {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      userType: this.userType,
    };
  }
  async checkPassword(password) {
    const isValid = await bcrypt.compare(password, this.password);
    return isValid;
  }
}

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
    allowNull: true,
  },
  calendlyLink: {
    type: DataTypes.STRING,
    validate: { isURL: true },
    allowNull: true,
  },

  location: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  priceAmount: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  priceId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Price,
      key: "id",
    },
  },
  isRemote: {
    type: DataTypes.STRING,
    allowNull: true,
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
  isProfileComplete: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  userType: {
    type: DataTypes.STRING,
    default: "tutor",
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
