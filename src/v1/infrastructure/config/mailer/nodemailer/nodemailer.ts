import Email from "../../../../business/domain/email/entity/email.entity";
import MailerAdapter from "../../../adapter/mailer/mailer.adapter";
import sendEmailDtoInterface from "../../../../business/domain/email/use-case/dto/input/sendEmailDto.interface";
const nodemailer = require('nodemailer');

export default class NodeMailer implements MailerAdapter {
  private transporter: any = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'everestmensageiro@gmail.com',
      pass: 'afdotzwwljusomhb',
    },
  });

  constructor() { }

  send(sendEmailDto: sendEmailDtoInterface): Promise<any> { 
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