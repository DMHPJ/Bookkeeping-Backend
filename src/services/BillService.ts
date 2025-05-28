import { BillRepository } from '../repositories/BillRepository';

export class BillService {
  private billRepository: BillRepository;

  constructor() {
    this.billRepository = new BillRepository();
  }

  async getBillChrList(params: any): Promise<any> {
    return await this.billRepository.getBillChrList(params);
  }

  async getWalletList(params: any): Promise<any> {
    return await this.billRepository.getWalletList(params);
  }

  async getBillMainInfo(): Promise<any> {
    return await this.billRepository.getBillMainInfo();
  }
} 