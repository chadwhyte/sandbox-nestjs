import { NestMiddleware, Injectable } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(request: Request, response: Response, next: () => void) {
    console.log(`Logger test - url: ${request.url}`);
    next();
  }
}
