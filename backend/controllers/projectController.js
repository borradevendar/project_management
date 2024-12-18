const Project = require("../models/Project");

// Fetch all tasks
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Project.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Accept a task
exports.acceptTask = async (req, res) => {
  try {
    const task = await Project.findByIdAndUpdate(
      req.params.id,
      { isAccepted: true },
      { new: true }
    );
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Complete a task and assign score
exports.completeTask = async (req, res) => {
  try {
    const { score } = req.body; // Pass score in request body
    const task = await Project.findByIdAndUpdate(
      req.params.id,
      { isCompleted: true, score: score || 0 },
      { new: true }
    );
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
