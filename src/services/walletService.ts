import { WalletRepository } from '../repositories/walletRepository';

export class WalletService {
  private walletRepository: WalletRepository;

  constructor() {
    this.walletRepository = new WalletRepository();
  }

  async getWalletList(params: any): Promise<any> {
    return await this.walletRepository.getWalletList(params);
  }
} 