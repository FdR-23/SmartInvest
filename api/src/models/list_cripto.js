const { DataTypes } = require('sequelize')
const sequelize = require('../db.js')


const listCripto = sequelize.define(
    'list_cripto',
    {
        market_cap_rank: { type: DataTypes.INTEGER, },
        id: {
            type: DataTypes.STRING,
        },
        image: { type: DataTypes.STRING, },
        name: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        symbol: {
            type: DataTypes.STRING,
        },
        market_cap: {
            type: DataTypes.FLOAT,
        },
        total_volume: {
            type: DataTypes.FLOAT,

        },
        current_price: {
            type: DataTypes.FLOAT,
        },
        price_change_percentage_1h_in_currency: {
            type: DataTypes.FLOAT,
        },
        price_change_percentage_24h_in_currency: {
            type: DataTypes.FLOAT,
        },
        price_change_percentage_7d_in_currency: {
            type: DataTypes.FLOAT,
        },
    },
    {
        timestamps: false
    });

module.exports = listCripto;