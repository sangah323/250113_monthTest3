const commentServices = require("../services/comment.service");

const getCommentList = async (req, res) => {
  const commentList = await commentServices.findAll();
  res.render("comment/list.html", { commentList });
};

const postCommentWrite = async (req, res) => {
  await commentServices.write();
  res.redirect("/comment/list");
};

const postCommentDelete = async (req, res) => {
  const id = parseInt(req.params.id);
  await commentServices.drop(id);
  res.redirect("/comment/list");
};

const getCommentUpdate = async (req, res) => {
  const id = parseInt(req.params.id);
  const comment = await commentServices.findOne(id);
  res.render("comment/update.html", { comment });
};

const postCommentUpdate = async (req, res) => {
  const id = parseInt(req.params.id);
  const { content } = req.body;
  const data = { id: id, content: content };
  await commentServices.update(data);
  res.redirect("/comment/list");
};

module.exports = {
  getCommentList,
  postCommentWrite,
  postCommentDelete,
  getCommentUpdate,
  postCommentUpdate,
};
