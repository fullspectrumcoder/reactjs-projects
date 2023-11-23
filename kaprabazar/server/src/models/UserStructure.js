const mongoose = require("mongoose");

let userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    contactNumber: String,
    role: String,
    userType:String,
    socialLinks: Object,
    location: String,
    intro: String,
    profileImage: String,
  },
  { collection: "users" }
);

let UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;
