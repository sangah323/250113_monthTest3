const commentRepository = require("../repository/comment.repository.js");

const findAll = async () => {
  const result = await commentRepository.findAll();
  return result;
};

module.exports = { findAll };
