const express = require("express");
const router = express.Router();
const { getCommentList } = require("../controllers/comment.controller.js");

router.get("/list", getCommentList);

module.exports = router;
