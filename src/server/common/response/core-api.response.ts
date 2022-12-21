import { ApiProperty } from '@nestjs/swagger';
import { IApiResponse } from './api.response.interface';
import { BaseCoreApiResponse } from './base-core-api.response';

export class CoreApiResponse<TData> extends BaseCoreApiResponse {
    @ApiProperty({
        default: null,
        nullable: true
    })
    public readonly data?: TData;

    private constructor(
        code: string,
        message: string,
        data?: TData,
        detailsMessage?: []
    ) {
        super(code, message, detailsMessage);
        this.data = data;
    }

    public static success<TData = any>(
        code: string,
        message: string,
        data?: TData,
        detailsMessage?: []
    ): CoreApiResponse<TData> {
        return new CoreApiResponse(code, message, data, detailsMessage);
    }

    public static error<TData = any>(
        code: string,
        message: string,
        detailsMessage?: []
    ): CoreApiResponse<TData> {
        return new CoreApiResponse(code, message, undefined, detailsMessage);
    }

    public static response<TData = any>(
        response: Partial<IApiResponse>
    ): CoreApiResponse<TData> {
        const { code, message, data, detailsMessage } = response;
        return new CoreApiResponse(code, message, data, detailsMessage);
    }
}