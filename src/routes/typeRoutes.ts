import { Router } from "express";
import { TypeController } from "../controllers/typeController";

export const getTypeRoutes = () => {
	const typeController = new TypeController();
	const router: Router = Router();
	router.post("/api/types/list", (req, res) => typeController.getTypeList(req, res));
	router.post("/api/types/add", (req, res) => typeController.addType(req, res));
	router.post("/api/types/update", (req, res) => typeController.updateType(req, res));
	return router;
};
