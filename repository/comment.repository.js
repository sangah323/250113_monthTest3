const pool = require("./db.js");

const findAll = async () => {
  const [result] = await pool.query("SELECT * FROM comments;");
  return result;
};

module.exports = { findAll };
