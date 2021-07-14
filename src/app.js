require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const utilsAPI = require("./utils/utils");
const hbs = require("hbs");
//Static Directory
const publicDirectoryPath = path.join("public");
const viewsPath = path.join("templates/views");
const partialsPath = path.join("templates/partials");
app.use(express.static(publicDirectoryPath));
app.set("views", viewsPath);
app.set("view engine", "hbs");
hbs.registerPartials(partialsPath);
const router = require("./routes/router");
// Router
// app.use(router);

app.route("").get((req, res) => {
  res.render("index", {
    title: "Weather",
    name: "TDA",
    test: "header",
  });
});

app.get("/weather", async (req, res) => {
  if (!req.query.address) {
    return res.json("no address was provided");
  }
  try {
    const data = await utilsAPI.fetchDataWeather(req.query.address);
    res.json(data);
  } catch (error) {
    res.json("Sorry please try again");
  }
});

app.get("/test/*", (req, res) => {
  console.log(req.params.ok, "TEST PARAMS");

  res.send({ test: "ok" });
});

//Server
app.listen(port, (err) => {
  !err && console.log("Server is listening on port : " + port);
});
