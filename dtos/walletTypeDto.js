const moment = require("moment-timezone");
const uuid = require("../utils/uuid");
const basicDto = require("./main");

// 获取类型列表
const getWalletTypeListDto = async (params) => {
  const sql = "select * from flutter_wallet_type where asset_type=? order by type asc";
  const sqlArr = [params.assetType]; 
  const res = await basicDto.basicGetList(sql, sqlArr);

  return res;
};

module.exports = {
  getWalletTypeListDto,
};
