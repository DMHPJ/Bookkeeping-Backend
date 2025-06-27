import { Request, Response } from "express";
import { AppDataSource } from "../app";
import { User } from "../entities/userEntities";
import { PasswordUtils } from "../utils/passwordUtils";
import { JWTUtils } from "../utils/jwtUtils";
import { AuthenticatedRequest } from "../middleware/authMiddleware";
import { ResponseUtil } from "@/utils/responseUtil";
import { uuid } from "uuidv4";

const toRegister = async (username: string, password: string) => {
	try {
		const userRepo = AppDataSource.getRepository(User);
		// 加密密码
		const hashedPassword = PasswordUtils.hashPassword(password);

		// 创建新用户
		const newUser = userRepo.create({
			id: uuid(),
			billId: uuid(),
			username,
			password: hashedPassword,
			nickname: username,
			isDelete: 0,
		});
		const savedUser = await userRepo.save(newUser);

		// 生成token
		const token = JWTUtils.generateToken({ id: savedUser.id, username: savedUser.username });

		return ResponseUtil.success({ ...savedUser, token }, "注册成功");
	} catch (error) {
		return ResponseUtil.error("注册失败");
	}
};

// 登录接口 未注册时自动注册
export const loginOrRegister = async (req: Request, res: Response) => {
	const { username, password } = req.body;
	if (!username || !password) {
		return res.status(400).json({ success: false, message: "用户名和密码不能为空" });
	}
	try {
		const userRepo = AppDataSource.getRepository(User);
		const user = await userRepo.findOne({ where: { username } });
		// 注册
		if (!user) {
			const registerRes = await toRegister(username, password);
			return res.json(registerRes);
		} else {
			// 登录
			const isValid = PasswordUtils.verifyPassword(password, user.password);
			if (!isValid) return res.json(ResponseUtil.error("密码错误"));

			const token = JWTUtils.generateToken({ id: user.id, username: user.username });
			return res.json(ResponseUtil.success({ ...user, token }, "登录成功"));
		}
	} catch (error) {
		return res.json(ResponseUtil.error("登录失败"));
	}
};

export const getCurrentUser = async (req: AuthenticatedRequest, res: Response) => {
	try {
		const userId = req.user?.id;
		if (!userId) return res.json(ResponseUtil.error("用户未认证"));

		const userRepo = AppDataSource.getRepository(User);
		const user = await userRepo.findOne({ where: { id: userId } });

		if (!user) return res.json(ResponseUtil.error("用户不存在"));

		return res.json(ResponseUtil.success(user, "查找成功"));
	} catch (error) {
		return res.json(ResponseUtil.error("查找失败"));
	}
};
