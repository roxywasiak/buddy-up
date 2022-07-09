const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection");
// import references

const Ads = require("./ads");
const Tutors = require("./Tutor");

class Responses extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  adId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Ads,
      key: "id",
    },
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Ads,
      key: "subjectId",
      model: Tutors,
      key: "id",
    },
  },
  status: {
    type: Sequelize.ENUM("pending", "completed", "rejected"),
    allowNull: false,
    validate: {
      isUrl: true,
    },
  },
};

const options = {
  sequelize: connection,
  timestamps: true,
  underscored: false,
  freezeTableName: true,
  modelName: "Responses",
};

Responses.init(schema, options);

module.exports = Responses;
