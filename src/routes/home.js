const app = require("express")();
app.set("view engine", "hbs");

app.route("").get((req, res) => {
  res.render("views/index", {
    title: "Weather",
    name: "TDA",
  });
});

module.exports = app;
