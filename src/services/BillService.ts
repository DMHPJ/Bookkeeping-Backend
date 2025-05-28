import { BillRepository } from '../repositories/billRepository';

export class BillService {
  private billRepository: BillRepository;

  constructor() {
    this.billRepository = new BillRepository();
  }

  async getBillInfo(params: any): Promise<any> {
    return await this.billRepository.getBillInfo(params);
  }
} 