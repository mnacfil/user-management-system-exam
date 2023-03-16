"use strict";

const db = require('../config/db');
const Model = db.Sequelize.Model;

class User extends Model {}

const userModel = User.init(
    {
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
    }, {
        sequelize: db.pool,
        modelName: 'users'
    }
)

module.exports = userModel;