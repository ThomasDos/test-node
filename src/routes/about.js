const app = require("express")();
app.set("view engine", "hbs");

app.route("/about").get((req, res) => {
  res.render("about");
});

module.exports = app;
