//handle api calls related to /users/...

const express = require("express");
const router = express.Router();

const UsersController = require("./../controllers/users");

router.get("/getAllUsers", UsersController.getAllUsers);

router.get("/getUsers/:userId", UsersController.getSingleUser);

router.post("/saveUser", UsersController.saveUser);

router.patch("/updateUser/:userId", UsersController.updateUser);

router.delete("/deleteUser/:userId", UsersController.deleteUser);

module.exports = router;