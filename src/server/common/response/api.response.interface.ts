export interface IApiResponse<TData = any> {
    code: string;
    message: string;
    data?: TData;
    detailsMessage?: [];
    timestamp: number;
}