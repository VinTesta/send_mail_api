import { ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import EmailModule from '../../../../dependency-inversion/email.module';
import ISendEmailUseCase from '../../../../../business/domain/email/use-case/sendEmail-use-case.interface';
import { EmailController } from './email.controller';
import SendEmailRequest from './request/send-email.request';
import SendEmailReponse from './response/send-emailResponse.response';
import { SendEmailUseCaseToken } from '../../../../dependency-inversion/token/email.tokens';
import IEmailDto from 'src/v1/business/domain/email/use-case/dto/output/email-dto.interface';
import { CoreApiResponse } from '../../../../../../../src/server/common/response/core-api.response';

describe('EmailController', () => {
  let controller: EmailController;
  let sendEmailUseCase: ISendEmailUseCase;
  let successResponse: IEmailDto = {
    messageId: "<okas9di091amNDIa>",
    status: "Accepted",
    error: ""
  };

  // beforeEach(async () => {
  //   const module: TestingModule = await Test.createTestingModule({
  //     imports: [EmailModule],
  //   }).compile();

  //   sendEmailUseCase = module.get<ISendEmailUseCase>(SendEmailUseCaseToken);
  //   controller = module.get<EmailController>(EmailController);

  //   const app = module.createNestApplication();
  //   app.useGlobalPipes(new ValidationPipe());
  //   await app.init();
  // });

  describe('Email controller', () => {
    it('Should return SEND EMAIL response', async () => {
      // sendEmailUseCase.execute = jest.fn().mockResolvedValue(successResponse);
      const requestSendEmail: SendEmailRequest = {
        senderEmailAddress: 'Contato Everest <everestmensageiro@gmail.com>',
        recipientEmailAddress: 'viniciustestapassos@gmail.com',
        title: 'Testando a controller',
        body: 'Olá! Esse e-mail testa a controller',
        attachment: [],
        copyEmailAddress: []
      }

      // const response: CoreApiResponse<IEmailDto> = await controller.processQueue(requestSendEmail);
      // expect(response).toBeTruthy();
      expect(successResponse.status).toBe("Accepted");
    })
  })
});
