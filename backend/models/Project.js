const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  assignedTo: String,
  isAccepted: { type: Boolean, default: false }, // Task accepted status
  isCompleted: { type: Boolean, default: false }, // Task completed status
  score: { type: Number, default: 0 }, // Score for completed tasks
}, { timestamps: true });

module.exports = mongoose.model("Project", ProjectSchema);
