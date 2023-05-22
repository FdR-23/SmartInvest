const { DataTypes } = require('sequelize')
const sequelize = require("../db");


const listTendeceCripto = sequelize.define(
    'tendence_cripto', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    market_cap_rank: {
        type: DataTypes.INTEGER,
    },
    symbol: {
        type: DataTypes.STRING,
    },
    thumb: {
        type: DataTypes.STRING,
    },

})



module.exports = listTendeceCripto;