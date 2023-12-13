import { RootModule } from "./root.module";
import { NestFactory } from "@nestjs/core";
import Logger from "src/v1/application/logger/Logger";

export default class ServerApplication {
    public async run(): Promise<void> {
        const app = await NestFactory.create(RootModule);
        app.useLogger(new Logger());
        return await app.listen('3000');
    }
}