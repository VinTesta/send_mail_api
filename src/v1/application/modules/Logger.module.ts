import { Module } from "@nestjs/common";
import Logger from "../logger/Logger";
import { LoggerServiceToken, LoggerToken } from "../tokens";
import { LoggerService } from "../logger/Logger.service";

@Module({
    providers: [
        {
            provide: LoggerToken,
            useClass: Logger
        },
        {   
            provide: LoggerServiceToken,
            useFactory: (logger: Logger) => new LoggerService(logger),
            inject: [LoggerToken]
        }
    ],
    exports: [LoggerServiceToken],
})
export default class LoggerModule { }