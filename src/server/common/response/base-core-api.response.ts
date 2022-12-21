
import { ApiProperty } from '@nestjs/swagger';

export class BaseCoreApiResponse {
    @ApiProperty({
        required: true,
        type: String,
        example: 'CTX1'
    })
    public readonly code: string;

    @ApiProperty({
        required: true,
        type: String,
        example: 'SUA.MENSAGEM.I18N.CAMPO.VALIDACAO'
    })
    public readonly message: string;

    @ApiProperty({
        required: false,
        type: Number,
        example: 123456789999,
        description: 'Este campo é preenchido automaticamente com Date.now()'
    })
    public readonly timestamp: number;

    @ApiProperty({
        required: false,
        default: [],
        isArray: true,
        description:
          'Esse campo é utilizado para validações de formulário e pode conter Erros(error) ou Alertas (warning)'
    })
    public readonly detailsMessage?: [];

    constructor(
        code: string,
        message: string,
        detailsMessage?: []
    ) {
        this.code = code;
        this.message = message;
        this.timestamp = Date.now();
        this.detailsMessage = detailsMessage || [];
    }
}