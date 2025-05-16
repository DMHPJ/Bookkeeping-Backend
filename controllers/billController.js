const billDto = require("../dtos/billDto");

const getBillChrList = async (req, res) => {
	const params = req.body;
	const sqlRes = await billDto.getBillChrListDto(params);
	res.send(sqlRes);
};

const getWalletList = async (req, res) => {
	const params = req.body;
	const sqlRes = await billDto.getWalletListDto(params);
	res.send(sqlRes);
};

const getBillMainInfo = async (req, res) => {
	const sqlRes = await billDto.getBillMainInfoDto();
	res.send(sqlRes);
};

module.exports = {
	getBillMainInfo,
	getBillChrList,
	getWalletList
};
