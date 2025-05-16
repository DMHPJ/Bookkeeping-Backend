const express = require("express");
var billChrController = require("../controllers/billController");
var route = express.Router();

route.post("/", billChrController.getBillMainInfo);
route.post("/chrList", billChrController.getBillChrList);
route.post("/walletList", billChrController.getWalletList);

// route.post("/bill", (req, res) => {
// 	console.log(req.body);
// 	res.status(201).send(req.body);
// });

// route.post("/:id", (req, res) => {
// 	console.log(req.params.id);
// 	res.status(201).send(req.params.id);
// });

module.exports = route;