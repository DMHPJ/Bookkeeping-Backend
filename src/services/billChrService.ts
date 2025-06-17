import { BillChrRepository } from '@/repositories/billChrRepository';

export class BillChrService {
  private billChrRepository: BillChrRepository;

  constructor() {
    this.billChrRepository = new BillChrRepository();
  }

  getBillChrList = async (params: any): Promise<any> => {
    return await this.billChrRepository.getBillChrList(params);
  }
} 