const mongoose = require("mongoose");
const userModel = mongoose.Schema({
    fullName: String,
    gender: Boolean,
    contact: String,
    email: String,
});

module.exports = mongoose.model("users", userModel);