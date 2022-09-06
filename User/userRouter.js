const { Router } = require("express");
const express = require("express");
const routes = express.Router();
const userController = require("./userDAO");

routes.get("/", (req, res) => {
  try {
    userController.getUsers((err, results) => {
      if (err) {
        return res.status(400).send(err);
      }
      return res.status(200).send({ status: "OK", data: results });
    });
  } catch (err) {
    return res.status(500).send("Try after sometime");
  }
});

routes.get("/:userid", (req, res) => {
  try {
    const userId = req.params.userid;
    userController.getUserById(userId, (err, result) => {
      if (err) {
        return res.status(400).send(err);
      }
      return res.status(200).send({ status: "OK", data: result });
    });
  } catch (err) {
    return res.status(500).send("Uexpected error try later");
  }
});

routes.put("/:userId", (req, res) => {
  try {
    const userId = req.params.userId;
    const userName = req.body.userName;
    userController.updateUserdetails(userId, userName, (err, results) => {
      if (err) {
        return res.status(400).send(err);
      }
      return res.status(200).send({ status: "OK", data: results });
    });
  } catch {
    return res.status(500).send("Unexpected error try later");
  }
});

routes.delete("/:userId", (req, res) => {
  try {
    const userId = req.params.userId;
    const userName = req.body.userName;
    userController.deleteUserdetails(userId, userName, (err, results) => {
      if (err) {
        return res.status(400).send(err);
      }
      return res.status(200).send({ status: "OK", data: results });
    });
  } catch {
    return res.status(500).send("Unexpected error try later");
  }
});

module.exports = routes;
