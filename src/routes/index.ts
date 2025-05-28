import { Express } from 'express';
import { getBillChrRoutes } from './billChrRoutes';
import { getTypeRoutes } from './typeRoutes';
import { getWalletTypeRoutes } from './walletTypeRoutes';
import { getBillRoutes } from './billRoutes';
import { getWalletRoutes } from './walletRoutes';

export const routes = (app: Express) => {
  // 主账单相关路由
  app.use("/bill", getBillRoutes());
  
  // 账单相关路由
  app.use("/billChr", getBillChrRoutes())

  // 类型相关路由
  app.use("/type", getTypeRoutes())

  // 钱包类型相关路由
  app.use("/wallet", getWalletRoutes())
  
  // 钱包类型相关路由
  app.use("/walletType", getWalletTypeRoutes())
}; 