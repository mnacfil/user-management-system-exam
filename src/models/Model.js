const db = require('../config/db');
const Model = db.Sequelize.Model;

class Users extends Model {}

const userModel = Users.init({
    user_id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: db.Sequelize.STRING
    },
    lastName: {
        type: db.Sequelize.STRING
    },
    address: {
        type: db.Sequelize.STRING
    },
    postalCode: {
        type: db.Sequelize.STRING
    },
    contactPhoneNumber: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING,
        unique: true
    },
    username: {
        type: db.Sequelize.STRING,
    },
    password: {
        type: db.Sequelize.STRING,
    },
    createdAt: {
        field: '_created_at',
        type: db.Sequelize.DATE
    }, 
    updatedAt: {
        field: '_modified_at',
        type: db.Sequelize.DATE
    }
})

module.exports = userModel;
