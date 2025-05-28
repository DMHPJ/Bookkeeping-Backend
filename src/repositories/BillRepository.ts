import { Repository } from 'typeorm';
import { BillChr } from '../entities/BillChr';
import { AppDataSource } from '../app';

export class BillRepository {
  private repository: Repository<BillChr>;

  constructor() {
    this.repository = AppDataSource.getRepository(BillChr);
  }

  async getBillChrList(params: any): Promise<any> {
    // 实现账单列表查询逻辑
    return await this.repository.find({
      where: {...params, isDelete: 0},
      order: { owningDate: 'ASC' }
    });
  }

  async getWalletList(params: any): Promise<any> {
    // 实现钱包列表查询逻辑
    return await this.repository.find({
      where: {...params, isDelete: 0},
      order: { createTime: 'DESC' }
    });
  }

  async getBillMainInfo(): Promise<any> {
    // 实现账单主要信息查询逻辑
    return await this.repository.find({
      order: { createTime: 'DESC' },
      take: 10
    });
  }
} 