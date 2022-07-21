const User = require("../models/User.js");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().populate("thoughts");
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id).populate("thoughts");
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({ message: "New user created!", data: newUser });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedUser = await User.findByIdAndUpdate(id, req.body);
    res.status(204).json({ message: "User updated!" });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteUser = await User.findByIdAndDelete(id);
    await User.updateMany(
      {},
      {
        $pull: {
          friends: id,
        },
      }
    );
    res.status(202).json({ message: "User deleted!" });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

const addFriend = async (req, res) => {
  const { userId, friendId } = req.params;
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, {
      $push: {
        friends: friendId,
      },
    });
    res.status(201).json({ message: "Friend added", data: updatedUser });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

const deleteFriend = async (req, res) => {
  const { userId, friendId } = req.params;
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, {
      $pull: {
        friends: friendId,
      },
    });
    res.status(201).json({ message: "Friend deleted", data: updatedUser });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
};
