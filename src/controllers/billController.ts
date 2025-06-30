import { Response } from "express";
import { BillService } from "@/services/billService";
import { ResponseUtil } from "@/utils/responseUtil";
import { AuthenticatedRequest } from "../middleware/authMiddleware";

export class BillController {
	private billService: BillService;

	constructor() {
		this.billService = new BillService();
	}

	getBillInfo = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
		try {
			// 获取认证用户信息
			const userId = req.user?.id;
			const username = req.user?.username;
			
			console.log(`用户 ${username} (ID: ${userId}) 正在获取账单信息`);
			
			req.body.userId = userId;
			const result = await this.billService.getBillInfo(req.body);
			res.json(ResponseUtil.success(result, "获取主账单成功"));
		} catch (error) {
			res.json(ResponseUtil.error("获取账单列表失败"));
		}
	}
}
