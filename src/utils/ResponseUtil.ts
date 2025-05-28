export enum ResponseType {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info'
}

export interface ResponseData<T = any> {
  code: number;
  data: T;
  type: ResponseType;
  msg: string;
}

export class ResponseUtil {
  static success<T>(data: T, msg: string = '操作成功'): ResponseData<T> {
    return {
      code: 200,
      data,
      type: ResponseType.SUCCESS,
      msg
    };
  }

  static error(msg: string = '操作失败', code: number = 500): ResponseData<null> {
    return {
      code,
      data: null,
      type: ResponseType.ERROR,
      msg
    };
  }

  static warning(msg: string, data: any = null): ResponseData {
    return {
      code: 200,
      data,
      type: ResponseType.WARNING,
      msg
    };
  }

  static info(msg: string, data: any = null): ResponseData {
    return {
      code: 200,
      data,
      type: ResponseType.INFO,
      msg
    };
  }
} 