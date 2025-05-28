import 'reflect-metadata';
import express from 'express';
import { DataSource } from 'typeorm';
import { config } from './config/database';
import { routes } from './routes';

const app = express();
const port = process.env.PORT || 3900;

// 创建数据库连接
export const AppDataSource = new DataSource(config);

// 中间件
app.use(express.json());

// 路由管理
routes(app);

// 启动服务器
AppDataSource.initialize()
  .then(() => {
    console.log('数据库连接成功');
    app.listen(port, () => {
      console.log(`服务器运行在 http://localhost:${port}`);
    });
  })
  .catch((error) => console.log('数据库连接失败:', error)); 