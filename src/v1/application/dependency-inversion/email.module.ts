import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
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
  controllers: [EmailController],
  imports: [
    ClientsModule.register([
      {
        name: "KAFKA_SERVICE",
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'kafka-mailer',
            brokers: ['electric-frog-7930-us1-kafka.upstash.io:9092'],
            sasl: {
              mechanism: 'scram-sha-256',
              username: 'ZWxlY3RyaWMtZnJvZy03OTMwJHiLRctIaTP1gkcTFDAgpRj9qXa8Tg6BwDMPUKU',
              password: 'Gw60ngamJdFF1rPBVPP9AQOXJLYOTq-3BpFla1RB1pIIeJ-n-jM8AASjdhDvyVlcOd13yQ==',
            },
            ssl: true,
          },
          consumer: {
            groupId: 'mailer-consumer'
          }
        }
      }
    ]),
  ]
})
export default class EmailModule {}
