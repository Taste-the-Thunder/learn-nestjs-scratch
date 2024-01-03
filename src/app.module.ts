import { Module } from "@nestjs/common";
import { AppConrtoller } from "./app.controller";

@Module({
  controllers:[AppConrtoller]
})
export class AppModule {

}