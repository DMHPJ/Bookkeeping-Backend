const basicDto = require("./main");

// 获取全部收支类型
const getAllTypeDto = async () => {
	const sql = "select * from flutter_type where is_delete=0";
	const sqlArr = [];
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

module.exports = {
	getAllTypeDto,
};
