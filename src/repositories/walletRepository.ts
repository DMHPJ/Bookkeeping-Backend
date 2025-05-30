import { Repository } from 'typeorm';
import { Wallet } from '@/entities/walletEntities';
import { AppDataSource } from '@/app';

export class WalletRepository {
  private repository: Repository<Wallet>;

  constructor() {
    this.repository = AppDataSource.getRepository(Wallet);
  }

  async getWalletList(params: any): Promise<any> {
    // 实现账单列表查询逻辑
    return await this.repository.find({
      where: {...params, isDelete: 0},
      order: { createTime: 'ASC' }
    });
  }
} 