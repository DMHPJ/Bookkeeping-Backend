import { Request, Response } from "express";
import { BillService } from "@/services/billService";
import { ResponseUtil } from "@/utils/responseUtil";

export class BillController {
	private billService: BillService;

	constructor() {
		this.billService = new BillService();
	}

	getBillInfo = async (req: Request, res: Response): Promise<void> => {
		try {
			const result = await this.billService.getBillInfo(req.body);
			res.json(ResponseUtil.success(result, "获取主账单成功"));
		} catch (error) {
			res.json(ResponseUtil.error("获取账单列表失败"));
		}
	}
}
