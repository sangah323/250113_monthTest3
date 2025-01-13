const express = require("express");
const router = express.Router();

const commentRouter = require("./comment.route");

router.use("/comment", commentRouter);

module.exports = router;
