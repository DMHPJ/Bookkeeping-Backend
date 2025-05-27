const typeDto = require("../dtos/typeDto");

const getTypeList = async (req, res) => {
  const params = req.body;
  const sqlRes = await typeDto.getTypeListDto(params);
  res.send(sqlRes);
};

const addType = async (req, res) => {
  const params = req.body;
  const sqlRes = await typeDto.addTypeDto(params);
  res.send(sqlRes);
};

const updateType = async (req, res) => {
  const params = req.body;
  let dtoFunc = null;
  console.log(params, params.id !== null);
  
  if(params.id === null) dtoFunc = typeDto.addTypeDto;
  else dtoFunc = typeDto.updateTypeDto;
  const sqlRes = await dtoFunc(params);
  res.send(sqlRes);
};

module.exports = {
	getTypeList,
  addType,
  updateType
};
