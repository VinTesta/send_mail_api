import Attachment from "../../../domain/attachment/entity/attachment.entity";
import Email from "../../../domain/email/entity/email.entity";
import sendEmailDtoInterface from "../../../domain/email/use-case/dto/input/sendEmail-dto.interface";
import emailDtoInterface from "../../../domain/email/use-case/dto/output/email-dto.interface";
import ISendEmailUseCase from "../../../domain/email/use-case/sendEmail-use-case.interface";
import EmailAddress from "../../../domain/email/value-object/emailAddress.value-object";
import MailerAdapter from "../../../../infrastructure/adapter/mailer-adapter.interface";
import { HttpException } from "@nestjs/common";

export default class SendEmailUseCase implements ISendEmailUseCase {
  constructor(readonly mailer: MailerAdapter) {}

  async execute(input: sendEmailDtoInterface): Promise<emailDtoInterface> {
    const from: EmailAddress = new EmailAddress(input.senderEmailAddress);
    const to: EmailAddress = new EmailAddress(input.recipientEmailAddress);
    const emailContent: Email = new Email(input.title, input.body);
    for(let attach of input.attachment) {
      emailContent.addAttachment(new Attachment(attach._name, attach._extension, attach._content));
    }

    const copyEmailAddress: Array<EmailAddress> = input.copyEmailAddress.map(emailString => new EmailAddress(emailString));

    const sendInput: sendEmailDtoInterface = {
      senderEmailAddress: from.value,
      recipientEmailAddress: to.value,
      body: emailContent._body,
      title: emailContent._title,
      attachment: emailContent.attachmentList,
      copyEmailAddress: copyEmailAddress.map(emailAddress => emailAddress.value)
    }

    const output = await this.mailer.send(sendInput);
  
    if(output.status === "Rejected") throw new HttpException("Error on send e-mail", 401);
    return output;
  }
}