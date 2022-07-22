const Thought = require("../models/Thought");
const User = require("../models/User");

const getAllThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.status(200).json(thoughts);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

const getThoughtById = async (req, res) => {
  const { id } = req.params;
  try {
    const thought = await Thought.findById(id);
    res.status(200).json(thought);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

const createThought = async (req, res) => {
  const { id } = req.params;

  try {
    const newThought = await Thought.create(req.body);
    await User.findByIdAndUpdate(id, {
      $push: {
        thoughts: newThought._id,
      },
    });
    res.status(201).json({ message: "New thought created!", data: newThought });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

const updateThought = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedThought = await Thought.findByIdAndUpdate(id, req.body);
    res.status(200).json({ message: "Thought updated!", data: updatedThought });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

const deleteThought = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteThought = await Thought.findByIdAndDelete(id);
    res.status(202).json({ message: "Thought deleted!" });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

module.exports = {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
};
