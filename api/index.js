const express = require("express");
const router = express.Router();
const tasksRouter = require("./tasks");
const usersRouter = require("./user")

router.use("/tasks", tasksRouter);
router.use("./user", usersRouter);

module.exports = router;
