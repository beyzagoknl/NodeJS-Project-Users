const userService = require("./userDAO");

const getUsers = function (done) {
  userService.getUsers(done);
};

const getUserById = function (userId, done) {
  userService.getUserById(userId, done);
};
const updateUserdetails = function (userId, userName, done) {
  userService.updateUserdetails(userId, userName, done);
};
const deleteUserdetails = function (userId, userName, done) {
  userService.deleteUserdetails(userId, userName, done);
};
module.exports = {
  getUsers,
  getUserById,
  updateUserdetails,
  deleteUserdetails,
};

//calls the service layer
