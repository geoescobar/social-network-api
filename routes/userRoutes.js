const express = require("express");
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../controllers/users");
const router = require("express").Router();

router.get("/", getAllUsers);

router.post("/", createUser);

router.get("/:id", getUserById);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

router.post("/:userId/friends/:friendId", addFriend);

router.delete("/:userId/friends/:friendId", deleteFriend);

module.exports = router;
