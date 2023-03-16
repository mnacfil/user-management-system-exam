const express = require('express');
const router = express.Router();

const {
    addUser,
    editUser,
    deleteUser,
    getAllUser,
    removeAllUser
} = require('../controllers/user.controller');

router.route('/').post(addUser).get(getAllUser);
router.route('/:id').get(editUser).delete(deleteUser);
router.delete('/remove-all-user', removeAllUser);

module.exports = router