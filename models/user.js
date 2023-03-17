'use strict';
const db = require('../config/db')
const Model = db.Sequelize.Model;

class Users extends Model {}

const UserModel = Users.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: db.Sequelize.INTEGER
  },
  firstName: {
    type: db.Sequelize.STRING
  },
  lastName: {
    type: db.Sequelize.STRING
  },
  email: {
    type: db.Sequelize.STRING
  },
  password: {
    type: db.Sequelize.STRING
  },
  mobilePhone: {
    type: db.Sequelize.STRING
  },
  address: {
    type: db.Sequelize.STRING
  },
  postalCode: {
    type: db.Sequelize.STRING
  },
  username: {
    type: db.Sequelize.STRING
  },
  createdAt: {
    allowNull: false,
    type: db.Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: db.Sequelize.DATE
  },
  
},{
  sequelize: db.pool,
  modelName: 'users'
})

module.exports = UserModel;