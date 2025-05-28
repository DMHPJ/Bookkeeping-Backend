import { Request, Response } from "express";
import { TypeService } from "../services/typeService";
import { ResponseUtil } from "../utils/responseUtil";

export class TypeController {
	private typeService: TypeService;

	constructor() {
		this.typeService = new TypeService();
	}

	async getTypeList(req: Request, res: Response): Promise<void> {
		try {
			const result = await this.typeService.getTypeList(req.body);
			res.json(ResponseUtil.success(result, "获取类型列表成功"));
		} catch (error) {
			res.json(ResponseUtil.error("获取类型列表失败"));
		}
	}

	async addUpdateType(req: Request, res: Response): Promise<void> {
		try {
			let func = null;
			if (req.body.id === null) func = this.typeService.addType;
			else func = this.typeService.updateType;

      const result = await func(req.body);
			res.json(ResponseUtil.success(result, "成功"));
		} catch (error) {
			res.json(ResponseUtil.error("更新类型失败"));
		}
	}
}
