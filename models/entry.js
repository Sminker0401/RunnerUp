const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Entry extends Model {}

Entry.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    activity: {
        type: DataTypes.STRING,
    },
    duration: {
        type: DataTypes.INTEGER,
    },
    goal: {
        type: DataTypes.BOOLEAN,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'entry',
  }
);

module.exports = Entry;