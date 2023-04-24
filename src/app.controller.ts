import { Controller, Get, Inject } from "@nestjs/common";
import { AppService, CommonApi, Register } from "./app.service";
import { DbService } from "./db/db.service";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly commonApi: CommonApi,
    @Inject("DbService")
    private readonly dbService: DbService,
  ) {}

  @Get()
  getHello(): string {
    return this.dbService.connect();
  }
  @Get("b")
  getA(): string {
    return this.commonApi.getA();
  }
}

@Controller("register")
export class RegisterController {
  constructor(private readonly register: Register) {}
  @Get()
  registers(): string {
    return this.register.register();
  }
}
