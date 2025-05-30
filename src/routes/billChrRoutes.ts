import { Router } from "express";
import { BillChrController } from "@/controllers/billChrController";

export const getBillChrRoutes = () => {
	const billChrController = new BillChrController();
  const router: Router = Router();
	router.post("/list", (req, res) => billChrController.getBillChrList(req, res));
	return router;
};
