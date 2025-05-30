import { Repository } from 'typeorm';
import { WalletType } from '@/entities/walletTypeEntities';
import { AppDataSource } from '@/app';

export class WalletTypeRepository {
  private repository: Repository<WalletType>;

  constructor() {
    this.repository = AppDataSource.getRepository(WalletType);
  }

  async getWalletTypeList(params: any): Promise<WalletType[]> {
    console.log(params)
    return await this.repository.find({
      where: {...params, isDelete: 0},
      order: { type: 'ASC' },
    });
  }
} 