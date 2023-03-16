'use strict';
const db = require('../config/db')
const Model = db.Sequelize.Model;

class Users extends Model {}

const UserModel = Users.init({
  user_id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  mobilePhone: {
    type: Sequelize.STRING
  },
  address: {
    type: Sequelize.STRING
  },
  postalCode: {
    type: Sequelize.STRING
  },
  username: {
    type: Sequelize.STRING
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  
},{
  sequelize: db.pool,
  modelName: 'users'
})

module.exports = UserModel;