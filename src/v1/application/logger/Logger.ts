import { ConsoleLogger, Injectable, Scope } from "@nestjs/common";

@Injectable({ scope: Scope.TRANSIENT })
export default class Logger extends ConsoleLogger {
    override log(message: string) {
        super.log(message);
    }

    override error(message: string) {
        super.error(message);
    }
}