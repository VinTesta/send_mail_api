import { Module } from "@nestjs/common";
import { HealthCheckController } from "../controllers/HealthCheck.controller";
import { ExceptionModule } from "./Exception.module";

@Module({
    imports: [ExceptionModule],
    controllers: [HealthCheckController]
})
export class HealthCheckModule { }