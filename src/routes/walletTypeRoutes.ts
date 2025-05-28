import { Router } from "express";
import { WalletTypeController } from "../controllers/walletTypeController";

export const getWalletTypeRoutes = () => {
  const walletTypeController = new WalletTypeController();
  const router: Router = Router();
  router.post('/list', (req, res) => walletTypeController.getWalletTypeList(req, res));
  return router;
};
