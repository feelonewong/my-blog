import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  constructor(
    @Inject("ConfigService")
    private readonly configService: Record<string, any>, // 表示configService是一种键为字符串，值为任意类型的值
  ) {}
  getHello(): string {
    console.log(this.configService);
    return "Hello World!" + `===${this.configService.url}`;
  }
}

@Injectable()
// 一个服务要用一个装饰器声明上
export class CommonApi {
  getA(): string {
    return "this is a ";
  }
}

@Injectable()
export class Register {
  register(): string {
    return "注册成功~";
  }
}
