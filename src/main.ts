import { Controller, Module, Get } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

@Controller()
class AppConrtoller{
  @Get()
  getRootRoute(){
    return 'hi there!';
  }
}

@Module({
  controllers:[AppConrtoller]
})
class AppModule {

}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();