import { Module } from "@nestjs/common";
import { AppController, RegisterController } from "./app.controller";
import { AppService, CommonApi, Register } from "./app.service";
import { ConfigService } from "./config/config.service";
import { DbService } from "./db/db.service";
import { RegisterModule } from "./register/register.module";
import { TestModule } from "./test/test.module";

@Module({
  controllers: [AppController, RegisterController],
  imports: [RegisterModule, TestModule],
  providers: [
    AppService,
    CommonApi,
    Register,
    ConfigService,
    {
      provide: "DbService",
      inject: ["ConfigService"],
      useFactory(configService) {
        return new DbService(configService);
      },
    },
  ], // 服务提供者，要注册到模块中
})
export class AppModule {}
