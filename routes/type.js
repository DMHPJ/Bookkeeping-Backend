const express = require("express");
var typeController = require("../controllers/typeController");
var route = express.Router();

route.post("/list", typeController.getTypeList);
// // 新增收支类型
// route.post("/add", typeController.addType);
// 增改收支类型
route.post("/update", typeController.updateType);

module.exports = route;