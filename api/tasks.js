const express = require("express");
const router = express.Router();
const { Task, User } = require("../database");
const pg = require("pg");

// TASK 4: Add the necessary routes here
// This time, use your newly created Sequelize models instead of the dummy database

// GET all tasks
router.get("/", async (req, res) => {
  // Replace this with your code!
  try {
    const tasks = await pg.query("SELECT * FROM tasks");
    res.send(tasks.rows);
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(400);
  }
});

// // GET a single task by id
router.get("/:id", async (req, res) => {
  // Replace this with your code!
  try {
    const taskID = parseInt(req.params.id);
    const task = await pg.query("SELECT * FROM tasks WHERE id = $1 ", [taskID]);
    res.send(task);
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(400);
  }
});

// Patch a task by id
router.patch("/:id", async (req, res) => {
  try {
    const taskID = parseInt(req.params.id);
    const completed = req.body.completed;
    const result = await pg.query(
      "UPDATE tasks SET completed = $1 WHERE id = $2",
      [completed, taskID]
    );
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(400);
  }
});

// Delete a task by id
router.delete("/:id", async (req, res) => {
  try {
    const taskID = parseInt(req.params.id);
    const result = await pg.query("DELETE FROM tasks WHERE id = $1", [taskID]);
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(400);
  }
});

// Create a new task
// router.post("/", async (req, res) => {
//   try {
//     const task = req.body;
//     const result = await pg.query("INSERT INTO tasks (n");
//   } catch (err) {
//     console.error(err);
//     res.sendStatus(400);
//   }
// });

 module.exports = router;

// // TASK 5: Create a new routes file for users, and add as many routes as you see fit
// // Don't forget to export the router, and import it into api/index.js
