//anything to do with authentication, passport

const express = require("express");
const router = express.Router();

// @route GET api/users/test
// @desc  Tests User Route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "User work" }));

module.exports = router;
