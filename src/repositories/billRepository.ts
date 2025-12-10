import { Repository } from 'typeorm';
import { Bill } from '@/entities/billEntities';
import { AppDataSource } from '@/app';

export class BillRepository {
  private repository: Repository<Bill>;

  constructor() {
    this.repository = AppDataSource.getRepository(Bill);
  }

  getBillInfo = async (params: any): Promise<any> => {
    // 实现账单列表查询逻辑
    return await this.repository.findOne({
      where: {...params, isDelete: 0},
    });
  }

  save = async (billData: Partial<Bill>): Promise<Bill> => {
    const bill = this.repository.create(billData);
    return await this.repository.save(bill);
  }
} 