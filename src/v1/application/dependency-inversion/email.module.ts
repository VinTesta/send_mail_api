import { Module } from '@nestjs/common';
import SendEmailUseCase from '../../business/service/email/use-case/sendEmail.use-case';
import Nodemailer from '../../infrastructure/config/mailer/nodemailer';
import { EmailController } from '../api/rest/controller/email/email.controller';
import { SendEmailUseCaseToken } from './token/email.tokens';

@Module({
  providers: [
    {
      provide: SendEmailUseCaseToken,
      useFactory(mailer: Nodemailer = new Nodemailer()) {
        return new SendEmailUseCase(mailer);
      }
    }
  ],
  controllers: [EmailController]
})
export default class EmailModule {}
