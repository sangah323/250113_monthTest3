const commentRepository = require("../repository/comment.repository");

const findAll = async () => {
  const result = await commentRepository.findAll();
  return result;
};

const write = async (content) => {
  const result = await commentRepository.write(content);
  return result;
};

const drop = async (id) => {
  const result = await commentRepository.drop(id);
  return result;
};

module.exports = { findAll, write, drop };
