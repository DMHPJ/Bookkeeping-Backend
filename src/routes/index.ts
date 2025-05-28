import { Express } from 'express';
import { WalletTypeController } from '../controllers/walletTypeController';
import { getBillRoutes } from './billRoutes';
import { getTypeRoutes } from './typeRoutes';
import { getWalletTypeRoutes } from './walletTypeRoutes';

export const routes = (app: Express) => {
  // 账单相关路由
  app.use("/bill", getBillRoutes())

  // 类型相关路由
  app.use("/type", getTypeRoutes())
  
  // 钱包类型相关路由
  app.use("/walletType", getWalletTypeRoutes())
}; 