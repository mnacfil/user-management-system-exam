const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.delete('/delete-multiple-user', userController.deleteMultipleUsersByTheirID);
router.route('/').
                post(userController.createUser).
                get(userController.getAllUser);
router.route('/:id').
                patch(userController.updateUser).
                delete(userController.deleteUser);

module.exports = router;