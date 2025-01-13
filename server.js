const express = require("express");
const app = express();

const PORT = process.env.SERVER_PORT ? process.env.SERVER_PORT : 3000;

app.get("/", (req, res) => {
  res.send("열림?");
});

app.listen(PORT, () => {
  console.log("server start");
});
