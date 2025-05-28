import { Repository } from 'typeorm';
import { BillChr } from '../entities/billChrEntities';
import { AppDataSource } from '../app';

export class BillChrRepository {
  private repository: Repository<BillChr>;

  constructor() {
    this.repository = AppDataSource.getRepository(BillChr);
  }

  async getBillChrList(params: any): Promise<any> {
    // 实现账单列表查询逻辑
    return await this.repository.find({
      where: {...params, isDelete: 0},
      order: { owningDate: 'ASC' }
    });
  }
} 