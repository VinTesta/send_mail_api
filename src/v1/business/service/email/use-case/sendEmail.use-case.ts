import MailerAdapter from "../../../../infrastructure/adapter/mailer/mailer.adapter";
import sendEmailDtoInterface from "../../../domain/email/use-case/dto/input/sendEmailDto.interface";
import emailOutputInterface from "../../../domain/email/use-case/dto/output/emailOutput.interface";
import ISendEmail from "../../../domain/email/use-case/sendEmail.interface";

export default class SendEmail implements ISendEmail {
  constructor(private readonly mailer: MailerAdapter){}

  execute(input: sendEmailDtoInterface): Promise<emailOutputInterface> {
    return new Promise<emailOutputInterface>(async (resolve, reject) => {
      const mailSent = await this.mailer.send(input);
      resolve(mailSent)
    })
  }
}