//bad user data was in this gotta redo this
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({});
module.exports = mongoose.model("users", usersSchema); 