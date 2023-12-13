import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { Request, Response } from 'express';
import { LoggerService } from "src/v1/application/logger/Logger.service";
import { LoggerServiceToken } from "src/v1/application/tokens";

@Catch()
@Injectable()
export default class HttpExceptionFilter implements ExceptionFilter {
    constructor(
        @Inject(LoggerServiceToken) private readonly loggerService: LoggerService
    ){ }

    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception.getStatus();

        this.loggerService.httpStatusToLog(exception);

        response
            .status(status)
            .json({
                error: "Ocorreu um erro inesperado."
            });
    }
}