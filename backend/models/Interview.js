const mongoose = require("mongoose")

const interviewSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true
  },

  questions: {
    type: Array,
    required: true
  },

  answers: {
    type: Object,
    required: true
  },

  score: {
    type: Number,
    default: 0
  }

}, {
  timestamps: true
})

module.exports = mongoose.model("Interview", interviewSchema)