const express = require("express");
var typeController = require("../controllers/typeController");
var route = express.Router();

route.post("/all", typeController.getAllType);
// 新增收支类型
route.post("/add", typeController.addType);
// 修改收支类型
route.post("/update", typeController.updateType);

module.exports = route;