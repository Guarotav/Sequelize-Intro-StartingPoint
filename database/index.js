const db = require("./db");
const Task = require("./task");
const User = require("./user");

// TASK 3: Set up associations here
Task.belongsTo(User);
User.hasMany(Task);
// What kind of relationship is there between a user and a task?

// Export everything needed
module.exports = {
  db,
  Task,
  User,
};
