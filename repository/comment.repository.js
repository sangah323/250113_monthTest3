const pool = require("./db.js");

const findAll = async () => {
  const [result] = await pool.query("SELECT * FROM comments;");
  return result;
};

const write = async (content) => {
  console.log("rr");
  const [result] = await pool.query(
    `INSERT INTO comments(content) values("${content}");`
  );
  return result;
};

module.exports = { findAll, write };
