import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import SendEmailUseCase from '../../business/service/email/use-case/sendEmail.use-case';
import Nodemailer from '../../infrastructure/config/mailer/nodemailer';
import { EmailController } from '../api/rest/controller/email/email.controller';
import { SendEmailUseCaseToken } from './token/email.tokens';
require('dotenv').config();

@Module({
  providers: [
    {
      provide: SendEmailUseCaseToken,
      useFactory(mailer: Nodemailer = new Nodemailer()) {
        return new SendEmailUseCase(mailer);
      }
    }
  ],
  controllers: [EmailController],
  imports: [
    ClientsModule.register([
      {
        name: "KAFKA_SERVICE",
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: process.env.KAFKA_SENDMAIL_CLIENT_ID,
            brokers: [process.env.KAFKA_SENDMAIL_URL],
            sasl: {
              mechanism: 'scram-sha-256',
              username: process.env.KAFKA_SENDMAIL_USERNAME,
              password: process.env.KAFKA_SENDMAIL_PASSWORD,
            },
            ssl: true,
          },
          consumer: {
            groupId: process.env.KAFKA_SENDMAIL_GROUP_ID
          }
        }
      }
    ]),
  ]
})
export default class EmailModule {}
