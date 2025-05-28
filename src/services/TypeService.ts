import { TypeRepository } from '../repositories/TypeRepository';
import { Type } from '../entities/Type';

export class TypeService {
  private typeRepository: TypeRepository;

  constructor() {
    this.typeRepository = new TypeRepository();
  }

  async getTypeList(params: any): Promise<Type[]> {
    return await this.typeRepository.getTypeList(params);
  }

  async addType(typeData: Partial<Type>): Promise<Type> {
    return await this.typeRepository.addType(typeData);
  }

  async updateType(id: number, typeData: Partial<Type>): Promise<Type | null> {
    return await this.typeRepository.updateType(id, typeData);
  }
} 