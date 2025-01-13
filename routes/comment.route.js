const express = require("express");
const router = express.Router();
const {
  getCommentList,
  postCommentWrite,
} = require("../controllers/comment.controller.js");

router.get("/list", getCommentList);

router.post("/write", postCommentWrite);

module.exports = router;
