const { DataTypes } = require('sequelize')
const sequelize = require('../db.js')

const ticketsCripto = sequelize.define(
    'tickets_cripto',
    {
        name: {
            type: DataTypes.STRING,
            primaryKey: true,
            unique: true,

        },
        tickers: {
            type: DataTypes.JSON,
            allowNull: false,
        }
    },
    {
        timestamps: false
    });

module.exports = ticketsCripto;