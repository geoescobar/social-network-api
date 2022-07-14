const express = require("express");
const {
  createUser,
  getAllUsers,
  getUserById,
} = require("../controllers/users");
const router = require("express").Router();

router.get("/", getAllUsers);

router.post("/", createUser);

router.get("/:id", getUserById);

router.post("/:id", getUserById);

router.delete("/:id", getUserById);

module.exports = router;
