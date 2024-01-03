import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppConrtoller{
  @Get()
  getRootRoute(){
    return 'hi there!';
  }
}