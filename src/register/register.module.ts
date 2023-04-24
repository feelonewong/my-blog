import { Module } from "@nestjs/common";
import { RegisterController } from "./register.controller";
import { RegisterService } from "./register.service";
import { TestModule } from "../test/test.module";

@Module({
  imports: [TestModule],
  controllers: [RegisterController],
  providers: [RegisterService],
})
export class RegisterModule {}
