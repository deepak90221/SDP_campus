"use strict";

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  pass: String
});
var UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;