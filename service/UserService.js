const { deleteUserById } = require('../repository/UserRepository');
const usersRepository = require('../repository/UserRepository');

class UsersService {

    // create user
    createUser = async(reqObject) => {
        try {
            const user = {
                userId: reqObject.id,
                firstName: reqObject.firstName,
                lastName: reqObject.lastName,
                username: reqObject.username,
                email: reqObject.email,
                password: reqObject.password,
                mobilePhone: reqObject.firstName,
                address: reqObject.address,
                postalCode: reqObject.postalCode,
                firstName: reqObject.firstName,
                firstName: reqObject.firstName,
            }
            const userResult = await usersRepository.createUser(user);
            return {
                status: "SUCCESS",
                message: "Success creating users",
                data: userResult
            }
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    deleteUserById = async(id) => {
        try {
            const deletedUser = await usersRepository.deleteUserById(id);
            console.log(deletedUser);
            if(deletedUser !== 1) {
                // this means user already deleted or user is not found in db
                return {
                    status: "SUCCESS",
                    message: "User not found, its either deleted or Not been registered",
                    data: null
                }
            }
            return {
                status: "SUCCESS",
                message: "Success delete user",
                data: deletedUser
            }
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    deleteMultipleUsersByTheirID = async(usersID) => {
        try {
            const deletedUsers = await usersRepository.deleteMultipleUserbyTheirID(usersID);
            return {
                status: "SUCCESS",
                message: "Success delete user",
                data: deletedUsers
            }
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    
    updateUserById = async(id, reqObject) => {
        try {
            const updatedUser = await usersRepository.updateUserById(id, reqObject);
            return {
                status: "SUCCESS",
                message: "Success update user",
                data: updatedUser
            }
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    getAllUser = async() => {
        try {
            const users = await usersRepository.getAllUsers();
            if(users.length === 0) {
                return {
                    status: "SUCCESS",
                    message: "There is no user in database",
                    data: users
                }
            }
            return {
                status: "SUCCESS",
                message: "Success get all user",
                data: users
            }
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

}

module.exports =  new UsersService();