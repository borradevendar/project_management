const express = require("express");
const { getTasks, acceptTask, completeTask } = require("../controllers/projectController");

const router = express.Router();

router.get("/", getTasks); // Fetch all tasks
router.put("/:id/accept", acceptTask); // Accept a task
router.put("/:id/complete", completeTask); // Complete a task and assign score

module.exports = router;
