const commentServices = require("../services/comment.service.js");

const getCommentList = async (req, res) => {
  const commentList = await commentServices.findAll();
  res.render("comment/list.html", { commentList });
};

const postCommentWrite = async (req, res) => {
  console.log("cc");
  await commentServices.write();
  res.redirect("/comment/list");
};

module.exports = { getCommentList, postCommentWrite };
