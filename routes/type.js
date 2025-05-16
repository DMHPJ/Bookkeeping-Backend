const express = require("express");
var typeController = require("../controllers/typeController");
var route = express.Router();

route.post("/all", typeController.getAllType);

module.exports = route;