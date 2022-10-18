import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import V1Module from "../v1/application/dependency-inversion/v1.module";

@Module({
  imports: [
    V1Module, 
    ConfigModule.forRoot({
      envFilePath: '.env.dev',
    })
  ]
})
export default class RootModule{};