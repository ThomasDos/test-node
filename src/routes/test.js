const app = require("express")();

app.get("/myboul", (req, res) => {
  console.log("REQUEST TEST");
  res.send("Hello");
});

module.exports = app;
