import { Controller, Get } from "@nestjs/common";
import { TestService } from "../test/test.service";

@Controller("register1")
export class RegisterController {
  constructor(private readonly test: TestService) {}
  @Get()
  show() {
    return this.test.helloTest();
  }
}
