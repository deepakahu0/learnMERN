// location, bio, education, experience, social network link
// profile model and user model

const express = require("express");
const router = express.Router();

// @route GET api/posts/test
// @desc  Tests Posts Route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Posts work" }));

module.exports = router;
