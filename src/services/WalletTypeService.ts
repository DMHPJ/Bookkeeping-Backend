import { WalletTypeRepository } from '@/repositories/walletTypeRepository';
import { WalletType } from '@/entities/walletTypeEntities';

export class WalletTypeService {
  private walletTypeRepository: WalletTypeRepository;

  constructor() {
    this.walletTypeRepository = new WalletTypeRepository();
  }

  async getWalletTypeList(params: any): Promise<WalletType[]> {
    return await this.walletTypeRepository.getWalletTypeList(params);
  }
} 