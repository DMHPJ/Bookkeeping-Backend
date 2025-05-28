import { Request, Response } from 'express';
import { BillService } from '../services/billService';
import { ResponseUtil } from '../utils/responseUtil';

export class BillController {
  private billService: BillService;

  constructor() {
    this.billService = new BillService();
  }

  async getBillChrList(req: Request, res: Response): Promise<void> {
    try {
      console.log(req.body);
      const result = await this.billService.getBillChrList(req.body);
      res.json(ResponseUtil.success(result, '获取账单列表成功'));
    } catch (error) {
      res.json(ResponseUtil.error('获取账单列表失败'));
    }
  }

  async getWalletList(req: Request, res: Response): Promise<void> {
    try {
      const result = await this.billService.getWalletList(req.body);
      res.json(ResponseUtil.success(result, '获取钱包列表成功'));
    } catch (error) {
      res.json(ResponseUtil.error('获取钱包列表失败'));
    }
  }

  async getBillMainInfo(req: Request, res: Response): Promise<void> {
    try {
      const result = await this.billService.getBillMainInfo();
      res.json(ResponseUtil.success(result, '获取账单主要信息成功'));
    } catch (error) {
      res.json(ResponseUtil.error('获取账单主要信息失败'));
    }
  }
} 