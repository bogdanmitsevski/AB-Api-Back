'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class devices extends Model {
    static associate(models) {
      this.belongsTo(models.experiments, { foreignKey: 'experimentId' })
    }
  }
  devices.init({
    uuid: { type: DataTypes.STRING, allowNull: false }
  }, {
    sequelize,
    tableName: 'devices',
    modelName: 'devices',
  });
  return devices;
};