const express = require('express');
const router = express.Router();

import userController from '../controllers/userController';

router.route('/').post(userController.createUser)
// router.delete('/remove-all-user', removeAllUser);
// router.route('/:id').patch(editUser).delete(deleteUser);

module.exports = router