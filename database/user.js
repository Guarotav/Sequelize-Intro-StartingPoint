const { DataTypes } = require("sequelize");
const db = require("./db");
//const {User} = require("../database")

// TASK 2: Define the User model here
 const User = db.define("user", {
  // You should define the following columns:
  // - name: string, required
  id: {
    type: DataTypes.INTEGER,
    primaryKey:  true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
