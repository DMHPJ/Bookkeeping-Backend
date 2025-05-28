import { Router } from "express";
import { BillController } from "../controllers/billController";

export const getBillRoutes = () => {
	const billController = new BillController();
  const router: Router = Router();
	router.post("/", (req, res) => billController.getBillMainInfo(req, res));
	router.post("/chrList", (req, res) => billController.getBillChrList(req, res));
	router.post("/walletList", (req, res) => billController.getWalletList(req, res));
	return router;
};
