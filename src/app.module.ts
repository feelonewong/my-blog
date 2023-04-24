import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService, CommonApi } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CommonApi],
})
export class AppModule {}
