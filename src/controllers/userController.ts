import { Request, Response } from "express";
import { UserService } from "@/services/userService";
import { AuthenticatedRequest } from "../middleware/authMiddleware";
import { ResponseUtil } from "@/utils/responseUtil";

export class UserController {
	private userService: UserService;

	constructor() {
		this.userService = new UserService();
	}

	/**
	 * 登录或注册
	 */
	loginOrRegister = async (req: Request, res: Response): Promise<void> => {
		try {
			const { username, password } = req.body;

			// 参数验证
			if (!username || !password) {
				res.json(ResponseUtil.error("用户名和密码不能为空"));
				return;
			}

			// 调用 Service 层
			const result = await this.userService.loginOrRegister(username, password);
			res.json(ResponseUtil.success(result, "登录成功"));
		} catch (error: any) {
			console.error(error);
			res.json(ResponseUtil.error(error.message || "登录失败"));
		}
	}

	/**
	 * 获取当前用户信息
	 */
	getCurrentUser = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
		try {
			const userId = req.user?.id;

			// 参数验证
			if (!userId) {
				res.json(ResponseUtil.error("用户未认证"));
				return;
			}

			// 调用 Service 层
			const user = await this.userService.getCurrentUser(userId);
			res.json(ResponseUtil.success(user, "查找成功"));
		} catch (error: any) {
			console.error(error);
			res.json(ResponseUtil.error(error.message || "查找失败"));
		}
	}
}
