import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { LoggerToken } from "../tokens";
import Logger from "./Logger";

@Injectable()
export class LoggerService {
    constructor(
        @Inject(LoggerToken) private readonly logger: Logger
    ) { }

    log(message: string, context?: string) {
        // Implemente a lógica de registro de log aqui
        this.logger.debug(message);
    }

    warn(message: string, context?: string) {
        // Implemente a lógica de registro de aviso aqui
        this.logger.warn(message);
    }

    error(message: string, context?: string, trace?: string) {
        // Implemente a lógica de registro de erro aqui
        this.logger.error(message);
    }

    httpStatusToLog(httpException: HttpException) {
        const status = httpException.getStatus();

        if (status >= HttpStatus.INTERNAL_SERVER_ERROR) {
            this.error(httpException.message);
        } else if (status >= HttpStatus.BAD_REQUEST) {
            this.warn(httpException.message);
        } else if (status >= HttpStatus.AMBIGUOUS) {
            this.log(httpException.message);
        } else {
            this.error(httpException.message);
        }
    }
}