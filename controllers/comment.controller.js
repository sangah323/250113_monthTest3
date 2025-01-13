const commentServices = require("../services/comment.service");

const getCommentList = async (req, res) => {
  const commentList = await commentServices.findAll();
  res.render("comment/list.html", { commentList });
};

const postCommentWrite = async (req, res) => {
  try {
    const content = req.body;
    await commentServices.write(content);
    res.redirect("/comment/list");
  } catch (error) {
    console.log(error);
    res.status(404).send("댓글 작성 실패");
  }
};

const postCommentDelete = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await commentServices.drop(id);
    res.redirect("/comment/list");
  } catch (error) {
    console.log(error);
    res.status(404).send("댓글 삭제 실패");
  }
};

const getCommentUpdate = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const comment = await commentServices.findOne(id);
    res.render("comment/update.html", { comment });
  } catch (error) {
    console.log(error);
    res.status(404).send("댓글 조회 실패");
  }
};

const postCommentUpdate = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { content } = req.body;
    const data = { id: id, content: content };
    await commentServices.update(data);
    res.redirect("/comment/list");
  } catch (error) {
    console.log(error);
    res.status(404).send("댓글 수정 실패");
  }
};

module.exports = {
  getCommentList,
  postCommentWrite,
  postCommentDelete,
  getCommentUpdate,
  postCommentUpdate,
};
