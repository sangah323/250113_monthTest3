const express = require("express");
const router = express.Router();
const {
  getCommentList,
  postCommentWrite,
  postCommentDelete,
  getCommentUpdate,
} = require("../controllers/comment.controller");

router.get("/list", getCommentList);

router.post("/write", postCommentWrite);

router.post("/delete/:id", postCommentDelete);

router.get("/update/:id", getCommentUpdate);

module.exports = router;
