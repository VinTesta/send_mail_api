import ISendEmailDto from "../../business/domain/email/use-case/dto/input/sendEmail-dto.interface";
import IEmailDto from "../../business/domain/email/use-case/dto/output/email-dto.interface";

export default interface MailerAdapter {
  send(emailInformation: ISendEmailDto): Promise<IEmailDto>;
}