import UsersRepository from '../repository/UserRepository';

class UsersService {

    // create user
    createUser = async(reqObject) => {
        try {
            const user = {
                userId: reqObject.userID,
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
            const userResult = await UsersRepository.createUser(user);
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
}

export default new UsersService();