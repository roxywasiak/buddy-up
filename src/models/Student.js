const bcrypt = require("bcrypt");
const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection");
// import hooks
const { hashPassword } = require("../hooks");

const Price = require("./Price");

class Student extends Model {
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
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
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
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  priceId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Price,
      key: "id",
    },
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  isRemote: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  lat: {
    type: DataTypes.DECIMAL(15, 8),
    allowNull: true,
    validate: {
      isDecimal: true,
    },
  },
  long: {
    type: DataTypes.DECIMAL(15, 8),
    allowNull: true,
    validate: {
      isDecimal: true,
    },
  },
  userType: {
    type: DataTypes.STRING,
    defaultValue: "student",
    allowNull: true,
  },
};

const options = {
  sequelize: connection,
  timestamps: true,
  underscored: false,
  freezeTableName: true,
  modelName: "student",
  hooks: {
    beforeCreate: hashPassword,
  },
};

Student.init(schema, options);

module.exports = Student;
