const mongoose = require("mongoose");
const dayjs = require("dayjs");

const formatDate = (date) => {
  return dayjs(date).format("M/D/YYYY h:mm a");
};

const reactionSchema = new mongoose.Schema({
  reactionId: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: [280, "Must be less than 280 characters"],
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
    get: formatDate,
  },
});

const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    minLength: [1, "Must be at least one character"],
    maxLength: [280, "Must be less than 280 characters"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
    get: formatDate,
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],
});

thoughtSchema.virtual("reactionCount").get(() => {
  return this.reactions.length;
});

const Thought = mongoose.model("Thought", thoughtSchema);

module.exports = Thought;
