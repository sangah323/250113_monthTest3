const express = require("express");
const router = express.Router();
const {
  getCommentList,
  postCommentWrite,
  postCommentDelete,
} = require("../controllers/comment.controller");

router.get("/list", getCommentList);

router.post("/write", postCommentWrite);

router.post("/delete/:id", postCommentDelete);

module.exports = router;
