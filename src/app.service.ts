import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Injectable()
export class CommonApi {
  getA(): string {
    return 'this is a';
  }
}
