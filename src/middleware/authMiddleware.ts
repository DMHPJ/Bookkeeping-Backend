import { Request, Response, NextFunction } from "express";
import { JWTUtils } from "../utils/jwtUtils";
import { ResponseUtil } from "@/utils/responseUtil";

export interface AuthenticatedRequest extends Request {
	user?: {
		id: string;
		username: string;
		billId: string;
	};
}

export const authMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
	try {
		const authHeader = req.headers.authorization;
		const token = JWTUtils.extractTokenFromHeader(authHeader);
		const payload = JWTUtils.verifyToken(token);
		console.log("操作用户信息：", payload);

		req.user = payload;
		if (req.body.hasOwnProperty("billId")) req.body.billId = payload.billId;
		next();
	} catch (error) {
		return res.status(200).json(ResponseUtil.unLogin("请重新登录"));
	}
};
