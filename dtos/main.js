var dbconfig = require("../utils/dbconfig");

const basicGetList = async (sql, sqlArr) => {
  const sqlRes = await dbconfig.promiseSqlConnect(sql, sqlArr);
  if (sqlRes.length === 0) return { code: 201, data: null, type: "success", msg: "无数据" };
  return { code: 200, data: sqlRes, type: "success", msg: "获取成功" };
};

const basicGetDetail = async (sql, sqlArr) => {
  const sqlRes = await dbconfig.promiseSqlConnect(sql, sqlArr);
  if (sqlRes.length === 0) return { code: 201, data: null, type: "success", msg: "无数据" };
  else if(sqlRes.length > 1) return { code: 500, data: null, type: "error", msg: "存在多条数据" };
  return { code: 200, data: sqlRes[0], type: "success", msg: "获取成功" };
};

const basicUpdate = async (sql, sqlArr) => { 
  const sqlRes = await dbconfig.promiseSqlConnect(sql, sqlArr);
  return { code: 200, data: null, type: "success", msg: "成功" };
};

module.exports = {
  basicGetList,
  basicGetDetail,
  basicUpdate
}