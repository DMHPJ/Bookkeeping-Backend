import { Request, Response } from 'express';
import { BillChrService } from '../services/billChrService';
import { ResponseUtil } from '../utils/responseUtil';

export class BillChrController {
  private billChrService: BillChrService;

  constructor() {
    this.billChrService = new BillChrService();
  }

  async getBillChrList(req: Request, res: Response): Promise<void> {
    try {
      console.log(req.body);
      const result = await this.billChrService.getBillChrList(req.body);
      res.json(ResponseUtil.success(result, '获取账单列表成功'));
    } catch (error) {
      res.json(ResponseUtil.error('获取账单列表失败'));
    }
  }
} 