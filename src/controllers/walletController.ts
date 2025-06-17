import { Request, Response } from 'express';
import { WalletService } from '@/services/walletService';
import { ResponseUtil } from '@/utils/responseUtil';

export class WalletController {
  private walletService: WalletService;

  constructor() {
    this.walletService = new WalletService();
  }

  getWalletList = async (req: Request, res: Response): Promise<void> => {
    try {
      const result = await this.walletService.getWalletList(req.body);
      res.json(ResponseUtil.success(result, '获取资产列表成功'));
    } catch (error) {
      res.json(ResponseUtil.error('获取资产列表失败'));
    }
  }

  addUpdateWallet = async (req: Request, res: Response): Promise<void> => {
    try {
			let func = null;
			if (req.body.id === null) func = this.walletService.addWallet;
			else func = this.walletService.updateWallet;

      const result = await func(req.body);
			res.json(ResponseUtil.success(result, "成功"));
		} catch (error) {
      console.log(error);
			res.json(ResponseUtil.error("更新资产失败"));
		}
  }
} 