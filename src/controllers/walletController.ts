import { Request, Response } from 'express';
import { WalletService } from '../services/walletService';
import { ResponseUtil } from '../utils/responseUtil';

export class WalletController {
  private walletService: WalletService;

  constructor() {
    this.walletService = new WalletService();
  }

  async getWalletList(req: Request, res: Response): Promise<void> {
    try {
      const result = await this.walletService.getWalletList(req.body);
      res.json(ResponseUtil.success(result, '获取资产列表成功'));
    } catch (error) {
      res.json(ResponseUtil.error('获取资产列表失败'));
    }
  }
} 