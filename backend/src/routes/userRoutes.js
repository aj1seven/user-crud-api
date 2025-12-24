const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// CREATE USER
router.post("/users", userController.createUser);
router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getUserById);
router.put("/usesrs/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

module.exports = router;

