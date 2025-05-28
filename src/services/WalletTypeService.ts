import { WalletTypeRepository } from '../repositories/WalletTypeRepository';
import { WalletType } from '../entities/WalletType';

export class WalletTypeService {
  private walletTypeRepository: WalletTypeRepository;

  constructor() {
    this.walletTypeRepository = new WalletTypeRepository();
  }

  async getWalletTypeList(params: any): Promise<WalletType[]> {
    return await this.walletTypeRepository.getWalletTypeList(params);
  }
} 