const Users = require('../models/user');
const Sequelize = require('sequelize');

class UsersRepository {
    // Get All Users in the database
    getAllUsers = () => {
        return new Promise((resolve, reject) => {
            try {
                resolve(Users.findAll({}));
            } catch (error) {
                console.log(`Repository Error: ${error}`);
                reject(err);
            }
        })
    }
    // Update user by user_id
    updateUserById = (userId, data) => {
        return new Promise((resolve, reject) => {
            try {
                resolve(Users.update(data, {
                    where: {
                        id: userId
                    }
                }))
            } catch (error) {
                console.log(`Repository Error: ${error}`);
                reject(err);
            }
        })
    }
    // delete user by user_id
    deleteUserById = (userId) => {
        return new Promise((resolve, reject) => {
            try {
                resolve(Users.destroy({
                    where: {
                        id: userId
                    }
                }))
            } catch (error) {
                console.log(`Repository Error: ${error}`);
                reject(err);
            }
        })
    }
    // create user
    createUser = (user) => {
        return new Promise((resolve, reject) => {
            try {
                resolve(Users.create(user))
            } catch (error) {
                console.log(`Repository Error: ${error}`);
                reject(err);
            }
        })
    }
}

module.exports = new UsersRepository();