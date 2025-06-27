const express = require("express");
const router = express.Router();
const TasksRouter = require("./tasks");
//const UsersRouter = require("./user")

router.use("/tasks", TasksRouter);
//router.use("./user", UsersRouter);

module.exports = router;
