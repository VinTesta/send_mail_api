import ISendEmailDto from "src/v1/business/domain/email/use-case/dto/input/sendEmail-dto.interface";
import IEmailDto from "src/v1/business/domain/email/use-case/dto/output/email-dto.interface";
import MailerAdapter from "../../adapter/mailer-adapter.interface";
const nodemailer = require('nodemailer');
require('dotenv').config();

export default class Nodemailer implements MailerAdapter {
  private transporter: any = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.HOST_EMAIL,
      pass: process.env.HOST_PASSWORD,
    },
  });

  constructor() {}

  async send(emailInformation: ISendEmailDto): Promise<IEmailDto> {
    const mailSent = await this.transporter.sendMail({
      from: emailInformation.senderEmailAddress,
      to: emailInformation.recipientEmailAddress,
      subject: emailInformation.title,
      text: emailInformation.body,
      html: emailInformation.body
    });

    return {
      messageId: mailSent.messageId,
      status: mailSent.accepted ? "Accepted" : "Rejected",
      error: ""
    }
  }
}