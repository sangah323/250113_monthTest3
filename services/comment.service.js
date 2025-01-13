const commentRepository = require("../repository/comment.repository.js");

const findAll = async () => {
  const result = await commentRepository.findAll();
  return result;
};

const write = async (content) => {
  console.log("ss");
  const result = await commentRepository.write(content);
  return result;
};

module.exports = { findAll, write };
