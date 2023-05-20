require('dotenv').config();
const { Sequelize } = require('sequelize');

const { PassThrough } = require('stream');
const {
    DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT
} = process.env;

const sequelize =
    process.env.NODE_ENV === "production"
        ? new Sequelize({
            database: DB_NAME,
            dialect: "postgres",
            host: DB_HOST,
            port: DB_PORT,
            username: DB_USER,
            password: DB_PASSWORD,
            pool: {
                max: 3,
                min: 1,
                idle: 10000,
            },
            dialectOptions: {
                ssl: {
                    require: true,
                    // Ref.: https://github.com/brianc/node-postgres/issues/2009
                    rejectUnauthorized: false,
                },
                keepAlive: true,
            },
            ssl: true,
        })
        : new Sequelize(
            `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/smartinvest`,
            { logging: false, native: false }
        );


module.exports = sequelize;