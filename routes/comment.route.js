const express = require("express");
const router = express.Router();

router.get("/list", (req, res) => {
  res.render("comment/list.html");
});

module.exports = router;
