import { Request, Response } from 'express';
import { WalletTypeService } from '@/services/walletTypeService';
import { ResponseUtil } from '@/utils/responseUtil';

export class WalletTypeController {
  private walletTypeService: WalletTypeService;

  constructor() {
    this.walletTypeService = new WalletTypeService();
  }

  getWalletTypeList = async (req: Request, res: Response): Promise<void> => {
    try {
      const result = await this.walletTypeService.getWalletTypeList(req.body);
      res.json(ResponseUtil.success(result, '获取钱包类型列表成功'));
    } catch (error) {
      res.json(ResponseUtil.error('获取钱包类型列表失败'));
    }
  }
} 