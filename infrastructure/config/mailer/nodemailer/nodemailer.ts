import ISendEmailDto from "src/v1/business/domain/email/use-case/dto/input/send-email-dto.interface";
import MailerAdapter from "../../../adapter/mailer/mailer.adapter";
const nodemailer = require('nodemailer');
require("dotenv/config");

export default class NodeMailer implements MailerAdapter {
  private transporter: any = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.USERNAME_SMTP,
      pass: process.env.PASSWORD_SMTP,
    },
  });

  constructor() { }

  send(sendEmailDto: ISendEmailDto): Promise<any> { 
    return new Promise<any>(async (resolve, reject) => 
    {
      const mailSent = await this.transporter.sendMail({
        from: sendEmailDto.senderEmail.getAddress(),
        to: sendEmailDto.recipientEmail.getAddress(),
        subject: sendEmailDto.email.getTitle(),
        text: sendEmailDto.email.getBody(),
        html: sendEmailDto.email.getBody()
      }, (err: any, info: any) => {
        resolve(info);
      });
    });
  }
}