import { Repository } from 'typeorm';
import { WalletType } from '../entities/walletTypeEntities';
import { AppDataSource } from '../app';

export class WalletTypeRepository {
  private repository: Repository<WalletType>;

  constructor() {
    this.repository = AppDataSource.getRepository(WalletType);
  }

  async getWalletTypeList(params: any): Promise<WalletType[]> {
    return await this.repository.find({
      where: params,
      order: { createdAt: 'DESC' }
    });
  }
} 