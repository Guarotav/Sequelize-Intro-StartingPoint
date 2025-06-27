const { DataTypes } = require("sequelize");
const db = require("./db");

// TASK 1: Define the Task model here
const Task = db.define("task", {
  // You should define the following columns:
  // - title: string, required
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

  // - description: string, required
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // - completed: boolean, default false
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,

  },

  user_ID: {
    type: DataTypes.INTEGER,
    allowNull: false, 
    
  }
});

module.exports = Task;
