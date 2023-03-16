"use strict"

const db = require('../config/db');
const process = require('process')

async function migrateUp(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
        user_id: {
            type: db.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: {
            type: db.Sequelize.STRING,
        },
        lastName: {
            type: db.Sequelize.STRING,
        },
        postCode: {
            type: db.Sequelize.STRING,
        },
        phoneNumber: {
            type: db.Sequelize.STRING,
        },
        email: {
            type: db.Sequelize.STRING,
            unique: true
        },
        password: {
            type: db.Sequelize.STRING,
        },
        userName: {
            type: db.Sequelize.STRING,
        },
        createdAt: {
            field: '_created_at',
            type: db.Sequelize.DATE
        },
        updatedAt: {
            field: 'updated_at',
            type: db.Sequelize.DATE
        }
    });

    console.log("Succesfully migrate up");
}

async function migrateDown (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');

    console.log("Succesfully migrate down");
}

const direction = process.argv[2];

if(direction.toLocaleLowerCase() === 'up'){
    migrateUp(db.pool.getQueryInterface(), db.Sequelize);
} else if (direction.toLocaleLowerCase() === 'down') {
    migrateDown(db.pool.getQueryInterface(), db.Sequelize);
}