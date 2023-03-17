const usersService = require('../service/UserService');

class UserController {
    createUser = async (req, res) => {
        try {
            const userCreationResult = await usersService.createUser(req.body);
            res.status(201).json({userCreationResult});
        } catch (error) {
            res.status(500).json({message: 'Something went wrong, Please try again later.'})
        }
    }

    // get all user
    getAllUser = async (req, res) => {
        try {
            const gettingAllUserResult = await usersService.getAllUser();
            res.status(200).json({gettingAllUserResult});
        } catch (error) {
            res.status(500).json({message: 'Something went wrong, Please try again later.'})
        }
    }

    // delete user
    deleteUser =async  (req, res) => {
        try {
            const userDeletingResult = await usersService.deleteUserById(req.params.id);
            res.status(200).json({userDeletingResult});
        } catch (error) {
            res.status(500).json({message: 'Something went wrong, Please try again later.'})
        }
    }

    // delete multiple user
    deleteMultipleUsersByTheirID =async  (req, res) => {
        try {
            const usersDeletingResult = await usersService.deleteMultipleUsersByTheirID(req.body.usersID);
            res.status(200).json({usersDeletingResult});
        } catch (error) {
            res.status(500).json({message: 'Something went wrong, Please try again later.'})
        }
    }

    // edit user
    updateUser =async  (req, res) => {
        try {
            const userUpdatedResult = await usersService.updateUserById(req.params.id, req.body);
            res.status(200).json({userUpdatedResult});
        } catch (error) {
            res.status(500).json({message: 'Something went wrong, Please try again later.'})
        }
    }

    // remove multiple user user
    removeAllUser =async  (req, res) => {
        // try {
        //     const userDeletingResult = await usersService.(req.params.id);
        //     res.status(200).json({userDeletingResult});
        // } catch (error) {
        //     res.status(500).json({message: 'Something went wrong, Please try again later.'})
        // }
    }
}

module.exports = new UserController();