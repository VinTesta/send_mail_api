import ISendEmailDto from "src/v1/business/domain/email/use-case/dto/input/send-email-dto.interface";
import IEmailOutputDto from "src/v1/business/domain/email/use-case/dto/output/email-output-dto.interface";
import ISendEmail from "src/v1/business/domain/email/use-case/send-email.interface";
import MailerAdapter from "../../../../infrastructure/adapter/mailer/mailer.adapter";

export default class SendEmail implements ISendEmail {
  constructor(private readonly mailer: MailerAdapter){}

  execute(input: ISendEmailDto): Promise<IEmailOutputDto> {
    return new Promise<IEmailOutputDto>(async (resolve, reject) => {
      const mailSent = await this.mailer.send(input);
      if(!mailSent) reject("It was not possible to send the email!");
      resolve(mailSent)
    })
  }
}