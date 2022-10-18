import { Body, Controller, Inject, Post } from '@nestjs/common';
import IEmailDto from '../../../../../business/domain/email/use-case/dto/output/email-dto.interface';
import { SendEmailUseCaseToken } from '../../../../../application/dependency-inversion/token/email.tokens';
import ISendEmailUseCase from '../../../../../business/domain/email/use-case/sendEmail-use-case.interface';
import SendEmailRequest from './request/send-email.request';
import SendEmailReponse from './response/send-emailResponse.response';

@Controller('email')
export class EmailController {
  
  constructor(
    @Inject(SendEmailUseCaseToken)
    private readonly sendEmailUseCase: ISendEmailUseCase
  ) {}

  @Post('send')
  async sendEmail(@Body() request: SendEmailRequest): Promise<SendEmailReponse> {
    const responseSendEmail: SendEmailReponse = await this.sendEmailUseCase.execute(request);
    return responseSendEmail;
  }
}
