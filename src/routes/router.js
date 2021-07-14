const router = require("express").Router();

const testRoute = require("./test");
const helloRoute = require("./hello");
const aboutRoute = require("./about");
const homeRoute = require("./home");

router.use(homeRoute, testRoute, helloRoute, aboutRoute);

module.exports = router;
