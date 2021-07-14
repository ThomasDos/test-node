const app = require("express")();

app.get("/hello", (req, res) => {
  console.log("HELLO route");
  res.send("ROUTE HELLO !!!");
});

module.exports = app;
