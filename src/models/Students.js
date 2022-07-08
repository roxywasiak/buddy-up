// import sequelize
// import bcrypt
const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection");
// import hooks
const { hashPassword } = require("../hooks");

class Students extends Model {
  // call a method that returns
  //    id: this.id,
  //       firstName: this.firstName,
  //       lastName: this.lastName,
  //       email: this.email,
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
  budget: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      isDecimal: true,
    },
    references: {
      model: Price,
      key: "id",
    },
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isRemote: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  lat: {
    type: DataTypes.DECIMAL(15, 8),
    allowNull: false,
    validate: {
      isDecimal: true,
    },
  },
  long: {
    type: DataTypes.DECIMAL(15, 8),
    allowNull: false,
    validate: {
      isDecimal: true,
    },
  },
};

const options = {
  sequelize: connection,
  timestamps: true,
  underscored: false,
  freezeTableName: true,
  modelName: "students",
  hooks: {
    beforeCreate: hashPassword,
  },
};

Students.init(schema, options);

module.exports = Students;
