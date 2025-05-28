import { Repository } from 'typeorm';
import { Type } from '../entities/typeEntities';
import { AppDataSource } from '../app';

export class TypeRepository {
  private repository: Repository<Type>;

  constructor() {
    this.repository = AppDataSource.getRepository(Type);
  }

  async getTypeList(params: any): Promise<Type[]> {
    return await this.repository.find({
      where: params,
      order: { createTime: 'DESC' }
    });
  }

  async addType(typeData: Partial<Type>): Promise<Type> {
    const type = this.repository.create(typeData);
    return await this.repository.save(type);
  }

  async updateType(id: string, typeData: Partial<Type>): Promise<Type | null> {
    await this.repository.update(id, typeData);
    return await this.repository.findOne({ where: { id } });
  }
} 