import { Express } from 'express';
import { getBillChrRoutes } from './billChrRoutes';
import { getTypeRoutes } from './typeRoutes';
import { getWalletTypeRoutes } from './walletTypeRoutes';
import { getBillRoutes } from './billRoutes';
import { getWalletRoutes } from './walletRoutes';
import { getUserRoutes } from './userRoutes';
import { authMiddleware } from '../middleware/authMiddleware';

export const routes = (app: Express) => {
  // 用户相关路由
  app.use('/user', getUserRoutes());

  // 需要认证的路由
  // 主账单相关路由
  app.use("/bill", authMiddleware, getBillRoutes());
  
  // 账单相关路由
  app.use("/billChr", authMiddleware, getBillChrRoutes())

  // 类型相关路由
  app.use("/type", authMiddleware, getTypeRoutes())

  // 钱包类型相关路由
  app.use("/wallet", authMiddleware, getWalletRoutes())
  
  // 钱包类型相关路由
  app.use("/walletType", authMiddleware, getWalletTypeRoutes())
}; 