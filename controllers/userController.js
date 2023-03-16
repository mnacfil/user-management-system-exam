import usersService from '../service/UserService';

class UserController {
    createUser = async (req, res) => {
        try {
            const userCreationResult = await usersService.createUser(req.body);
            res.status(201).json({userCreationResult})
        } catch (error) {
            res.status(500).json({message: 'Something went wrong, Please try again later.'})
        }
    }
    // edit user
// const editUser = (req, res) => {
//     res.json({msg: "edit user"});
// }
// // delete user
// const deleteUser = (req, res) => {
//     res.json({msg: "delete user"});
// }
// // get all user
// const getAllUser = (req, res) => {
//     res.json({msg: "get all user"});
// }
// // remove multiple user
// const removeAllUser = (req, res) => {
//     res.json({msg: "remove all  user"});
// }
}

export default new UserController();