import { Request, Response } from 'express';
import { TypeService } from '../services/TypeService';
import { ResponseUtil } from '../utils/ResponseUtil';

export class TypeController {
  private typeService: TypeService;

  constructor() {
    this.typeService = new TypeService();
  }

  async getTypeList(req: Request, res: Response): Promise<void> {
    try {
      const result = await this.typeService.getTypeList(req.body);
      res.json(ResponseUtil.success(result, '获取类型列表成功'));
    } catch (error) {
      res.json(ResponseUtil.error('获取类型列表失败'));
    }
  }

  async addType(req: Request, res: Response): Promise<void> {
    try {
      const result = await this.typeService.addType(req.body);
      res.json(ResponseUtil.success(result, '添加类型成功'));
    } catch (error) {
      res.json(ResponseUtil.error('添加类型失败'));
    }
  }

  async updateType(req: Request, res: Response): Promise<void> {
    try {
      const { id, ...typeData } = req.body;
      const result = await this.typeService.updateType(id, typeData);
      if (result) {
        res.json(ResponseUtil.success(result, '更新类型成功'));
      } else {
        res.json(ResponseUtil.warning('类型不存在'));
      }
    } catch (error) {
      res.json(ResponseUtil.error('更新类型失败'));
    }
  }
} 