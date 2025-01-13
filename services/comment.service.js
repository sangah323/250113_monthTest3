const commentRepository = require("../repository/comment.repository");

const findAll = async () => {
  const result = await commentRepository.findAll();
  return result;
};

const findOne = async (id) => {
  const [result] = await commentRepository.findOne(id);
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

const update = async (data) => {
  const result = await commentRepository.update(data);
  return result;
};

module.exports = { findAll, findOne, write, drop, update };
