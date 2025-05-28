const moment = require("moment-timezone");
const uuid = require("../utils/uuid");
const basicDto = require("./main");

// 获取全部收支类型
const getTypeListDto = async (params) => {
	const sql = "select * from flutter_type where is_delete=0 and is_income=?";
	const sqlArr = [params.isIncome];
	const res = await basicDto.basicGetList(sql, sqlArr);

	const parentList = res.data.filter((item) => !item.parentId);
	const childList = res.data.filter((item) => item.parentId);

	// 关联父子项
	childList.forEach((item) => {
		const pItemIndex = parentList.findIndex((pItem) => pItem.id === item.parentId);
		if (pItemIndex > -1) {
			parentList[pItemIndex].children = [...(parentList[pItemIndex].children || []), item];
		}
	});

	res.data = parentList.map((item) => {
		return {
			...item,
			children: item.children || [],
		};
	});

	return res;
};

// 新增收支类型
const addTypeDto = async (params) => {
	const sql =
		"INSERT INTO `flutter`.`flutter_type` (`id`, `parent_id`, `parent_name`, `parent_icon`, `icon`, `is_income`, `name`, `create_time`, `update_time`, `is_delete`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
	params.id = uuid.generateUUID();
	params.parentId = params.parentId ?? null;
	params.parentName = params.parentName ?? null;
	params.parentIcon = params.parentIcon ?? null;
	params.icon = params.name.split("")[0];
	params.createTime = moment().tz("Asia/Shanghai").format("YYYY-MM-DD HH:mm:ss");
	params.updateTime = moment().tz("Asia/Shanghai").format("YYYY-MM-DD HH:mm:ss");
	params.isDelete = 0;
	const sqlArr = [
		params.id,
		params.parentId,
		params.parentName,
		params.parentIcon,
		params.icon,
		params.isIncome,
		params.name,
		params.createTime,
		params.updateTime,
		params.isDelete,
	];
	const res = await basicDto.basicUpdate(sql, sqlArr);
	return res;
};

// 修改收支类型
const updateTypeDto = async (params) => {
	const sql =
		"UPDATE `flutter`.`flutter_type` SET `icon` = ?, `name` = ?, `is_income` = ?,`update_time` = ? WHERE (`id` = ?)";
	params.updateTime = moment().tz("Asia/Shanghai").format("YYYY-MM-DD HH:mm:ss");
	const sqlArr = [params.icon, params.name, params.isIncome, params.updateTime, params.id];
	const res = await basicDto.basicUpdate(sql, sqlArr);
	return res;
};

module.exports = {
	getTypeListDto,
	addTypeDto,
	updateTypeDto
};
