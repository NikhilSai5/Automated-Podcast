const express = require("express");
const port = 5000;

const app = express();

app.listen(port, () => {
  console.log(`server Started on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Welcome To server");
});
