import { Request, Response, NextFunction } from 'express';
import { ResponseUtil } from '../utils/responseUtil';

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error('全局异常捕获:', err);

  const message = err.message || '服务器内部错误';
  // 可以根据 error 类型返回不同的状态码，这里统一返回 200 (业务错误) 或 500
  // 如果项目约定业务错误也走 200，则保持 ResponseUtil 格式
  
  res.status(200).json(ResponseUtil.error(message));
};
