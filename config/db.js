require('dotenv').config();

const Sequelize = require('sequelize');

const pool = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    pool: {
        max: 50,
        min: 0,
        acquire: 60000,
        idle: 10000
    },
    timezone: '+08:00'
});

module.exports = {
    pool,
    Sequelize   
}
