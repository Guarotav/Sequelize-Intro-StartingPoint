const express = require("express");
const router = express.Router();
const { Task, User } = require("../database");


// TASK 4: Add the necessary routes here
// This time, use your newly created Sequelize models instead of the dummy database

// GET all tasks
router.get("/", async (req, res) => {
  // Replace this with your code!
  try {
    //const tasks = await pg.query("SELECT * FROM tasks");
    const tasks = await Task.findAll();
    res.send(tasks);
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
    const task = await Task.findByPk(taskID);
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
    const taskId = parseInt(req.params.id);
    const completed = req.body.completed;
    const task = await Task.findByPk(taskId);
    await task.update({completed: completed});
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
    const task =  await Task.findByPk(taskID);
    await task.destroy();
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(400);
  }
});

//Create a new task
router.post("/", async (req, res) => {
  try {
    const task = req.body;
    await Task.create(task);
    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(400);
  }
});

module.exports = router;

// // TASK 5: Create a new routes file for users, and add as many routes as you see fit
// // Don't forget to export the router, and import it into api/index.js
