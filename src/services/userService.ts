import { UserRepository } from '@/repositories/userRepository';
import { BillRepository } from '@/repositories/billRepository';
import { User } from '@/entities/userEntities';
import { PasswordUtils } from '@/utils/passwordUtils';
import { JWTUtils } from '@/utils/jwtUtils';
import { uuid } from 'uuidv4';

export interface LoginResponse {
  id: string;
  username: string;
  nickname: string;
  token: string;
}

export class UserService {
  private userRepository: UserRepository;
  private billRepository: BillRepository;

  constructor() {
    this.userRepository = new UserRepository();
    this.billRepository = new BillRepository();
  }

  /**
   * 登录或注册业务逻辑
   */
  loginOrRegister = async (username: string, password: string): Promise<LoginResponse> => {
    const user = await this.userRepository.findByUsername(username);
    
    if (!user) {
      // 用户不存在，执行注册
      return await this.register(username, password);
    } else {
      // 用户存在，执行登录
      return await this.login(user, password);
    }
  }

  /**
   * 注册新用户
   */
  private register = async (username: string, password: string): Promise<LoginResponse> => {
    // 加密密码
    const hashedPassword = PasswordUtils.hashPassword(password);

    // 创建新用户
    const newUser = await this.userRepository.save({
      id: uuid(),
      username,
      password: hashedPassword,
      nickname: username,
      isDelete: 0,
    });

    // 创建账单主表
    const billId = uuid();
    const newBill = await this.billRepository.save({
      id: billId,
      userId: newUser.id,
      isDelete: 0,
    });

    // 生成 token
    const token = JWTUtils.generateToken({ 
      id: newUser.id, 
      username: newUser.username, 
      billId: newBill.id 
    });

    return {
      id: newUser.id,
      username: newUser.username,
      nickname: newUser.nickname,
      token,
    };
  }

  /**
   * 用户登录
   */
  private login = async (user: User, password: string): Promise<LoginResponse> => {
    // 验证密码
    const isValid = PasswordUtils.verifyPassword(password, user.password);
    if (!isValid) {
      throw new Error('密码错误');
    }

    // 获取主账单
    const mainBill = await this.billRepository.getBillInfo({ userId: user.id });
    if (!mainBill) {
      throw new Error('用户没有主账单');
    }

    // 生成 token
    const token = JWTUtils.generateToken({ 
      id: user.id, 
      username: user.username, 
      billId: mainBill.id 
    });

    return {
      id: user.id,
      username: user.username,
      nickname: user.nickname,
      token,
    };
  }

  /**
   * 获取当前用户信息
   */
  getCurrentUser = async (userId: string): Promise<User> => {
    const user = await this.userRepository.findById(userId);
    if (!user) {
      throw new Error('用户不存在');
    }
    return user;
  }
}
