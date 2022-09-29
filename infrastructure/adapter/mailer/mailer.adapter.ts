import ISendEmailDto from "src/v1/business/domain/email/use-case/dto/input/send-email-dto.interface";
import Email from "../../../business/domain/email/entity/email.entity";

export default interface MailerAdapter {
  send(emailDto: ISendEmailDto): Promise<boolean>;
}