const express = require("express");
const {
  registerUser,
  registerUserWithGoogle,
  loginUser,
  updateUser,
} = require("../controllers/UserControllers");

const router = express.Router();

router.post("/api/user-create", registerUser);

router.post("/api/google-signup", registerUserWithGoogle);

router.post("/api/login-user", loginUser);

router.put("/api/update-user", updateUser);

module.exports = router;
