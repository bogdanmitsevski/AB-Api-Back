'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class experiments extends Model {
    static associate(models) {
    }
  }
  experiments.init({
    key: { type: DataTypes.STRING, allowNull: false },
    value: { type: DataTypes.STRING, allowNull: false, unique: true }
  }, {
    sequelize,
    tableName: 'experiments',
    modelName: 'experiments',
  });
  return experiments;
};