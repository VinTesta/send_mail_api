import { Body, Controller, HttpException, Inject, OnModuleInit, Post, ServiceUnavailableException } from '@nestjs/common';
import IEmailDto from '../../../../../business/domain/email/use-case/dto/output/email-dto.interface';
import { SendEmailUseCaseToken } from '../../../../../application/dependency-inversion/token/email.tokens';
import ISendEmailUseCase from '../../../../../business/domain/email/use-case/sendEmail-use-case.interface';
import SendEmailRequest from './request/send-email.request';
import { CoreApiResponse } from '../../../../../../server/common/response/core-api.response';
import { ClientKafka, MessagePattern, Payload } from '@nestjs/microservices';
import { Kafka, Producer } from 'kafkajs';

@Controller('email')
export class EmailController implements OnModuleInit {
  
  private kafkaProducer: Producer
  private kafka: Kafka;

  constructor(
    @Inject(SendEmailUseCaseToken)
    private readonly sendEmailUseCase: ISendEmailUseCase,
    @Inject('KAFKA_SERVICE')
    private clientKafka: ClientKafka
  ){}

  async onModuleInit() {
    this.kafkaProducer = await this.clientKafka.connect();
  }

  @MessagePattern("send-mail")
  async processQueue(@Payload() message: SendEmailRequest): Promise<CoreApiResponse<IEmailDto>> {
    return CoreApiResponse.response({ data: await this.sendEmailUseCase.execute(message) });
  }

  @Post('send')
  async sendToQueue(@Body() request: SendEmailRequest): Promise<CoreApiResponse<IEmailDto>> {
    try {
      await this.kafkaProducer.send(
        {
          topic: "send-mail",
          messages: [
            {
              key: Math.random() + "",
              value: JSON.stringify(request)
            }
          ]
        }
      );

      return CoreApiResponse.response({ message: "E-mail enviado com sucesso!" }) 
    }
    catch (ex) {
      throw new HttpException(CoreApiResponse.error("Service Error", `Error: ${ex}`), 502);
    }
  }
}
