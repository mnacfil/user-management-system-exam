const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.delete('/remove-all-user', userController.removeAllUser);
router.route('/').
                post(userController.createUser).
                get(userController.getAllUser);
router.route('/:id').
                patch(userController.updateUser).
                delete(userController.deleteUser);

module.exports = router;