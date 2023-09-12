import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Example middlearess.......');
    console.log(req.headers.authorization);
    const { authorization } = req.headers;

    if (!authorization)
      throw new HttpException('Not authorized', HttpStatus.FORBIDDEN);

    if (authorization === 'harshKiAuth') {
      next();
    } else {
      throw new HttpException('Invalid Auth Token', HttpStatus.FORBIDDEN);
    }
  }
}
export class ExampleMiddleware2 implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Example middlearess 2.......');
    next();
  }
}
