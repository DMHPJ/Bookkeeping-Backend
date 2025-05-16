const express = require("express");
const app = express();
const routes = require("./routes");
const port = process.env.PORT || 3000;

// 中间件
app.use(express.json());

// 路由管理
routes(app);

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
