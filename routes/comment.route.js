const express = require("express");
const router = express.Router();
const {
  getCommentList,
  postCommentWrite,
  postCommentDelete,
  getCommentUpdate,
  postCommentUpdate,
} = require("../controllers/comment.controller");

router.get("/list", getCommentList);

router.post("/write", postCommentWrite);

router.post("/delete/:id", postCommentDelete);

router.get("/update/:id", getCommentUpdate);

router.post("/update/:id", postCommentUpdate);

module.exports = router;
