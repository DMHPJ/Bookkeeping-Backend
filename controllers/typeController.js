const typeDto = require("../dtos/typeDto");

const getAllType = async (req, res) => {
  const sqlRes = await typeDto.getAllTypeDto();
  res.send(sqlRes);
};

module.exports = {
	getAllType
};
