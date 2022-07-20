const User = require("../models/User");
const { users } = require("./data");
const Connection = require("../config/connection");

const seedDb = async () => {
  try {
    await User.deleteMany();
    await User.insertMany(users);
    console.log("Users inserted");
    process.exit();
  } catch (error) {
    console.error(error);
  }
};

seedDb();
