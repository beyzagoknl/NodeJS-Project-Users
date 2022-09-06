const fs = require("fs");

const getUsers = function (done) {
  fs.readFile("./User/users.json", (err, fileContent) => {
    if (err) {
      return done("Encountered error while getting users details");
    }
    let userData = JSON.parse(fileContent);
    return done(undefined, userData);
  });
};
const getUserById = function (userId, done) {
  fs.readFile("User/users.json", (err, fileContent) => {
    if (err) {
      return done("Encountered error while getting users details");
    }
    let userData = JSON.parse(fileContent);
    const fetchedUsers = userData.find((usr) => usr.userId == userId);
    if (fetchedUsers === undefined) {
      return done("No user found for requested userId");
    }
    return done(undefined, fetchedUsers);
  });
};

const updateUserdetails = function (userId, userName, done) {
  fs.readFile("User/users.json", (err, fileContent) => {
    if (err) {
      return done("Encountered error while getting users details");
    }
    let userData = JSON.parse(fileContent);
    let index = userData.findIndex((usr) => usr.userId == userId);
    if (index == -1) {
      return done("No user found for requested userId!!");
    }
    userData[index].userName = userName;
    fs.writeFile(
      "User/user.json",
      JSON.stringify(userData),
      (err, updatedContent) => {
        if (err) {
          return done("Encountered error while updating user details");
        }
        return done(undefined, "Succesfully updated user details");
      }
    );
  });
};
const deleteUserdetails = function (userId, userName, done) {
  fs.readFile("User/users.json", (err, fileContent) => {
    if (err) {
      return done("Encountered error while getting users details");
    }

    let userData = JSON.parse(fileContent);
    let index = userData.findIndex((usr) => usr.userId == userId);
    console.log(index);

    userData = userData.filter((usr) => {
      return usr !== userData[index];
    });
    console.log(userData[index]);
    console.log(userData);

    if (index == -1) {
      return done("No user found for requested userId!!");
    }
    fs.writeFile(
      "User/user.json",
      JSON.stringify(userData),
      (err, updatedContent) => {
        if (err) {
          return done("Encountered error while updating user details");
        }
        return done(undefined, "Succesfully deleted user details");
      }
    );
  });
};
module.exports = {
  getUsers,
  getUserById,
  updateUserdetails,
  deleteUserdetails,
};

//read the file and get the json data.
//deleteUserdetails();
