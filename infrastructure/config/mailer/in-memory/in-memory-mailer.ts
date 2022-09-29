import ISendEmailDto from "src/v1/business/domain/email/use-case/dto/input/send-email-dto.interface";
import MailerAdapter from "../../../adapter/mailer/mailer.adapter";

export default class InMemoryMailer implements MailerAdapter {
  send(emailDto: ISendEmailDto): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => resolve(true));
  }
}