const commentServices = require("../services/comment.service.js");

const getCommentList = async (req, res) => {
  const commentList = await commentServices.findAll();
  res.render("comment/list.html", { commentList });
};

module.exports = { getCommentList };
