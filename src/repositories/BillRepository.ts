import { Repository } from 'typeorm';
import { Bill } from '../entities/billEntities';
import { AppDataSource } from '../app';

export class BillRepository {
  private repository: Repository<Bill>;

  constructor() {
    this.repository = AppDataSource.getRepository(Bill);
  }

  async getBillInfo(params: any): Promise<any> {
    // 实现账单列表查询逻辑
    return await this.repository.findOne({
      where: {...params, isDelete: 0},
    });
  }
} 