import { Repository } from 'typeorm';
import { User } from '@/entities/userEntities';
import { AppDataSource } from '@/app';

export class UserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  findById = async (id: string): Promise<User | null> => {
    return await this.repository.findOne({ 
      where: { id, isDelete: 0 } 
    });
  }

  findByUsername = async (username: string): Promise<User | null> => {
    return await this.repository.findOne({ 
      where: { username, isDelete: 0 } 
    });
  }

  save = async (user: Partial<User>): Promise<User> => {
    const newUser = this.repository.create(user);
    return await this.repository.save(newUser);
  }

  update = async (id: string, userData: Partial<User>): Promise<User | null> => {
    await this.repository.update(id, userData);
    return await this.findById(id);
  }
}
