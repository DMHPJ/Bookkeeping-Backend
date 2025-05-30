import { Router } from "express";
import { BillController } from "@/controllers/billController";

export const getBillRoutes = () => {
  const billController = new BillController();
  const router: Router = Router();
  router.post("/info", (req, res) => billController.getBillInfo(req, res));
  return router;
};
