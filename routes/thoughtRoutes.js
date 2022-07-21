const express = require("express");
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
} = require("../controllers/thoughts");
const router = require("express").Router();

router.get("/", getAllThoughts);

router.post("/:id", createThought);

router.get("/:id", getThoughtById);

router.put("/:id", updateThought);

router.delete("/:id", deleteThought);

module.exports = router;
