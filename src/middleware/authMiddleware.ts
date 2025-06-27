import { Request, Response, NextFunction } from "express";
import { JWTUtils } from "../utils/jwtUtils";
import { ResponseUtil } from "@/utils/responseUtil";

export interface AuthenticatedRequest extends Request {
	user?: {
		id: string;
		username: string;
	};
}

export const authMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
	try {
		const authHeader = req.headers.authorization;
    console.log(req.user)
		const token = JWTUtils.extractTokenFromHeader(authHeader);
		const payload = JWTUtils.verifyToken(token);


		req.user = payload;
		next();
	} catch (error) {
		return res.status(200).json(ResponseUtil.unLogin("请重新登录"));
	}
};
