const mysql = require("mysql2");

// 下划线命名法 转为 小驼峰命名法
function camelCaseKeys(obj) {
	const result = {};
	for (let key in obj) {
			let newKey = key[0].toLowerCase() + key.slice(1).replace(/_([a-z])/g, function($0,$1){return $1.toUpperCase();});
			result[newKey] = obj[key];
	}
	return result;
}

function formatData(data) {
	const camelCaseData = data.map(item => {
		item = camelCaseKeys(item);
		delete item.isDelete;
		return item;
	});
	return camelCaseData;
}

module.exports = {
	// 数据库配置
	config: {
		host: "120.76.43.198",
		port: "3306",
		user: "flutter",
		password: "DSnm9512357",
		database: "flutter",
	},
	// 连接数据库
	sqlConnect: function (sql, sqlArr, callBack) {
		const pool = mysql.createPool(this.config);
		pool.getConnection((err, conn) => {
			if (err) {
				console.log("数据库连接失败", err);
				return;
			}
			// 事件驱动回调
			conn.query(sql, sqlArr, callBack);
			// 释放连接
			conn.release();
		});
	},
	// Promise回调
	promiseSqlConnect: function (sql, sqlArr, callBack) {
		return new Promise((resolve, reject) => {
			const pool = mysql.createPool(this.config);
			pool.getConnection((err, conn) => {
				if (err) {
					console.log("数据库连接失败", err);
					reject(err);
				}
				// 事件驱动回调
				conn.query(sql, sqlArr, (err, data) => {
					if (err) {
						reject(err);
					} else {
						data = formatData(data);
						resolve(data);
					}
				});
				// 释放连接
				conn.release();
			});
		}).catch((err) => console.log(err));
	},
};
