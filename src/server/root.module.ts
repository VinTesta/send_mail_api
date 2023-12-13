import { Module } from "@nestjs/common";
import { HealthCheckModule } from "src/v1/application/modules/HealthCheck.module";

@Module({
    imports: [HealthCheckModule], // import the other modules
})
export class RootModule { }