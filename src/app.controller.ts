import { Controller, Get } from '@nestjs/common';
import { AppService, CommonApi } from './app.service';

@Controller('a')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly commonApi: CommonApi,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('b')
  getA(): string {
    return this.commonApi.getA();
  }
}
