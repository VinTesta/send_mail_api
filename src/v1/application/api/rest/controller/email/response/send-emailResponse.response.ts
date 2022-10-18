import IEmailDto from "src/v1/business/domain/email/use-case/dto/output/email-dto.interface";

export default class SendEmailReponse implements IEmailDto {
  messageId: string;
  status: string;
  error: any;
}