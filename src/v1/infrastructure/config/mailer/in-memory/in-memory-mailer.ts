import sendEmailDtoInterface from "../../../../business/domain/email/use-case/dto/input/sendEmailDto.interface";
import MailerAdapter from "../../../adapter/mailer/mailer.adapter";

export default class InMemoryMailer implements MailerAdapter {
  send(emailDto: sendEmailDtoInterface): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => resolve(true));
  }
}