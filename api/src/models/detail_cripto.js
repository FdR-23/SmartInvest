const { DataTypes } = require('sequelize')
const sequelize = require('../db.js')


const detailsCripto = sequelize.define(
    'detail_cripto',
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        simpleprice: {
            type: DataTypes.JSON,
            allowNull: false,
        },

        currentdata: {
            type: DataTypes.JSON,
            allowNull: false,
        },
    },
    {
        timestamps: false
    });

module.exports = detailsCripto;