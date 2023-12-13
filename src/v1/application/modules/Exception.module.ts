import { Module } from "@nestjs/common";
import HttpExceptionFilter from "src/server/ExceptionFilters/HttpExceptionFilter.filter";
import Logger from "../logger/Logger";
import { HttpExceptionFilterToken, LoggerServiceToken } from "../tokens";
import LoggerModule from "./Logger.module";
import { LoggerService } from "../logger/Logger.service";

@Module({
    imports: [LoggerModule],
    providers: [
        {
            provide: HttpExceptionFilterToken,
            useFactory: (loggerService: LoggerService) => new HttpExceptionFilter(loggerService),
            inject: [LoggerServiceToken]
        }
    ],
    exports: [HttpExceptionFilterToken, LoggerModule],
})
export class ExceptionModule { }