const sequelize = require('./db');
const { DataTypes } = require('sequelize');

const Devices = sequelize.define('devices', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true, allowNull: false },
    uuid: { type: DataTypes.STRING, allowNull: false },
    newdevice: { type: DataTypes.BOOLEAN, allowNull: false }
});

const Experiments = sequelize.define('experiments', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true, allowNull: false },
    key: { type: DataTypes.STRING, allowNull: false },
    value: { type: DataTypes.STRING, allowNull: false, unique: true }
});

Devices.belongsTo(Experiments);

module.exports = {
    Devices,
    Experiments
}