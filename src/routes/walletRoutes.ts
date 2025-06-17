import { Router } from "express";
import { WalletController } from "@/controllers/walletController";

export const getWalletRoutes = () => {
  const walletController = new WalletController();
  const router: Router = Router();
  router.post("/list", (req, res) => walletController.getWalletList(req, res));
  router.post("/addUpdate", (req, res) => walletController.addUpdateWallet(req, res));
  return router;
};
