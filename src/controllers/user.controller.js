

// add new user
const addUser = (req, res) => {
    res.json({msg: "add user"});
}
// edit user
const editUser = (req, res) => {
    res.json({msg: "edit user"});
}
// delete user
const deleteUser = (req, res) => {
    res.json({msg: "delete user"});
}
// get all user
const getAllUser = (req, res) => {
    res.json({msg: "get all user"});
}
// remove multiple user
const removeAllUser = (req, res) => {
    res.json({msg: "add user"});
}

module.exports = {
    addUser,
    editUser,
    deleteUser,
    getAllUser,
    removeAllUser
}