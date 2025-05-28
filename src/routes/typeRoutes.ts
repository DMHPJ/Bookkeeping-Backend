import { Router } from "express";
import { TypeController } from "../controllers/typeController";

export const getTypeRoutes = () => {
	const typeController = new TypeController();
	const router: Router = Router();
	router.post("/list", (req, res) => typeController.getTypeList(req, res));
	router.post("/addUpdate", (req, res) => typeController.addUpdateType(req, res));
	return router;
};
