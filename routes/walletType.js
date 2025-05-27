const express = require("express");
var walletTypeController = require("../controllers/walletTypeController");
var route = express.Router();

route.post("/list", walletTypeController.getWalletTypeList);

module.exports = route;