const bill = require("./bill");
const type = require("./type");
const spy = require("./spy");
const walletType = require("./walletType");
module.exports = (app) => {
	app.use("/bill", bill);
	app.use("/type", type);
	app.use("/spy", spy);
	app.use("/walletType", walletType);
};
