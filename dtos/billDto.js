const basicDto = require("./main");

// 获取账单列表信息
const getBillChrListDto = async (params) => {
	if (!params.id) return { code: 500, data: null, type: "error", msg: "缺少参数" };
	const sql = "select * from flutter_bill_chr where bill_id=?";
	const sqlArr = [params.id];
	const sqlRes = await basicDto.basicGetList(sql, sqlArr);
	return sqlRes;
};

// 获取钱包列表信息
const getWalletListDto = async (params) => {
	if (!params.id) return { code: 500, data: null, type: "error", msg: "缺少参数" };
	const sql = "select * from flutter_wallet where bill_id=?";
	const sqlArr = [params.id];
	const sqlRes = await basicDto.basicGetList(sql, sqlArr);
	return sqlRes;
};

// 获取记账账号主信息
const getBillMainInfoDto = async () => {
	const sql = "select * from flutter_bill where tenant='my' and is_delete=0";
	const sqlArr = [];
	const mainRes = await basicDto.basicGetDetail(sql, sqlArr);

	if (mainRes.code !== 200) return mainRes;

	const [chrRes, walletRes] = await Promise.all([
		getBillChrListDto({ id: mainRes.data.id }),
		getWalletListDto({ id: mainRes.data.id }),
	]);

	mainRes.data.billChrList = chrRes.data || [];
	mainRes.data.walletList = walletRes.data || [];

	return mainRes;
};

const testService = async () => {}

module.exports = {
	getBillMainInfoDto,
	getBillChrListDto,
	getWalletListDto,
	testService
};
