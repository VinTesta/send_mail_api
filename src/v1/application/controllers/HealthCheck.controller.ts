import { Controller, Get, HttpException, HttpStatus, Inject, Injectable, UseFilters } from "@nestjs/common";
import HttpExceptionFilter from "src/server/ExceptionFilters/HttpExceptionFilter.filter";
import { HttpExceptionFilterToken } from "../tokens";

@Injectable()
@Controller('/health-check')
export class HealthCheckController {

    constructor(
        @Inject(HttpExceptionFilterToken) HttpExceptionFilter: HttpExceptionFilter
    ){}

    @Get()
    @UseFilters(HttpExceptionFilter)
    verifyDisponibility(): { status: string } {
        throw new HttpException(
            "Erro inesperado", 
            // HttpStatus.INTERNAL_SERVER_ERROR // 500
            // HttpStatus.NOT_FOUND // 404
            HttpStatus.TEMPORARY_REDIRECT // 307
        );
        return { status: 'live' };
    }
}