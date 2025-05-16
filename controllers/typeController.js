const typeDto = require("../dtos/typeDto");

const getAllType = async (req, res) => {
  const sqlRes = await typeDto.getAllTypeDto();
  res.send(sqlRes);
};

const addType = async (req, res) => {
  const params = req.body;
  const sqlRes = await typeDto.addTypeDto(params);
  res.send(sqlRes);
};

const updateType = async (req, res) => {
  const params = req.body;
  const sqlRes = await typeDto.updateTypeDto(params);
  res.send(sqlRes);
};

module.exports = {
	getAllType,
  addType,
  updateType
};
