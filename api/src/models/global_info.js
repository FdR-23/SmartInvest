const { DataTypes } = require('sequelize')
const sequelize = require('../db.js')

const globalInfoCripto = sequelize.define(
    'global_info',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            unique: true,
        },
        active_cryptocurrencies: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        markets: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        total_market_cap: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        total_volume: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        market_cap_percentage: {
            type: DataTypes.JSON,
            allowNull: false,
        },
    },
    {
        timestamps: false
    });

module.exports = globalInfoCripto;