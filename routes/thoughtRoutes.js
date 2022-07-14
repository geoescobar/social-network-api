const express = require("express");
const {
  getAllThoughts,
  getThoughtById,
  createThought,
} = require("../controllers/thoughts");
const router = express.Router();

router.get("/", getAllThoughts);

router.post("/", createThought);

router.get("/:id", getThoughtById);

router.post("/:id", getThoughtById);

router.delete("/:id", getThoughtById);

module.exports = router;
