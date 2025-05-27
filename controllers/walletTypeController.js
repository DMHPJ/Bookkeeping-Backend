const walletTypeDto = require("../dtos/walletTypeDto");

const getWalletTypeList = async (req, res) => {
  const params = req.body;
  const sqlRes = await walletTypeDto.getWalletTypeListDto(params);
  res.send(sqlRes);
};

module.exports = {
  getWalletTypeList
};
