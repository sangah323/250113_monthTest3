const pool = require("./db");

const findAll = async () => {
  const [result] = await pool.query("SELECT * FROM comments;");
  return result;
};

const write = async (content) => {
  const [result] = await pool.query(
    `INSERT INTO comments(content) values("${content}");`
  );
  return result;
};

const drop = async (id) => {
  const [result] = await pool.query(`DELETE FROM comments WHERE id=${id};`);
  return result;
};

module.exports = { findAll, write, drop };
