import { Express } from 'express';
import { BillController } from '../controllers/billController';
import { TypeController } from '../controllers/typeController';
import { WalletTypeController } from '../controllers/walletTypeController';

export const routes = (app: Express) => {
  const billController = new BillController();
  const typeController = new TypeController();
  const walletTypeController = new WalletTypeController();

  // 账单相关路由
  app.post('/api/bills/chr-list', (req, res) => billController.getBillChrList(req, res));
  app.post('/api/bills/wallet-list', (req, res) => billController.getWalletList(req, res));
  app.get('/api/bills/main-info', (req, res) => billController.getBillMainInfo(req, res));

  // 类型相关路由
  app.post('/api/types/list', (req, res) => typeController.getTypeList(req, res));
  app.post('/api/types/add', (req, res) => typeController.addType(req, res));
  app.post('/api/types/update', (req, res) => typeController.updateType(req, res));

  // 钱包类型相关路由
  app.post('/api/wallet-types/list', (req, res) => walletTypeController.getWalletTypeList(req, res));
}; 