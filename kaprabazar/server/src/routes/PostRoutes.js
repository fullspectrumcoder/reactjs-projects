const express = require("express");
const { postCreate, fetchPosts } = require("../controllers/PostControllers");
const router = express.Router();

router.post("/api/post-create", postCreate);

router.get("/api/fetch-posts", fetchPosts);

// router.put("/api/update-user", updateUser);

module.exports = router;
