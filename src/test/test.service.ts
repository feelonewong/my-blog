import { Injectable } from "@nestjs/common";

@Injectable()
export class TestService {
  helloTest() {
    return "来自Test模块的service服务中的helloTest方法";
  }
}
