import MailerAdapter from "../../../../../src/v1/infrastructure/adapter/mailer-adapter.interface";
import Nodemailer from "../../../../../src/v1/infrastructure/config/mailer/nodemailer";
import ISendEmailDto from "../../../../../src/v1/business/domain/email/use-case/dto/input/sendEmail-dto.interface";
import ISendEmailUseCase from "../../../../../src/v1/business/domain/email/use-case/sendEmail-use-case.interface";
import SendEmailUseCase from "../../../../../src/v1/business/service/email/use-case/sendEmail.use-case";
import { HttpException } from "@nestjs/common";
describe("Test send email use case", () => {
  let senderModule: MailerAdapter;
  let sendEmailUseCase: ISendEmailUseCase;
  let successResponse = {
    messageId: "<okas9di091amNDIa>",
    status: "Accepted",
    error: ""
  };
  let errorResponse = {
    messageId: "",
    status: "Rejected",
    error: "Message not sended!"
  };

  beforeEach(() => {
    senderModule = new Nodemailer();
    sendEmailUseCase = new SendEmailUseCase(senderModule);
  });
  
  it("Should SEND EMAIL", async () => {
    senderModule.send = jest.fn().mockResolvedValue(successResponse);

    const sendEmailInput: ISendEmailDto = {
      senderEmailAddress: "Contato Everest <everestmensageiro@gmail.com",
      recipientEmailAddress: "viniciustestapassos@gmail.com",
      title: "Novo Ticket Aberto",
      body: "Olá cliente!<br><br> Um novo ticket foi aberto para o seu pedido <b>1027873<b>",
      attachment: [],
      copyEmailAddress: []
    }
    const responseSendEmail = await sendEmailUseCase.execute(sendEmailInput);
    expect(responseSendEmail).toBeTruthy();
    expect(responseSendEmail).toBe(successResponse);
  })

  it("Should NOT SEND EMAIL", async () => {
    senderModule.send = jest.fn().mockResolvedValue(errorResponse);

    const sendEmailInput: ISendEmailDto = {
      senderEmailAddress: "Contato Everest <everestmensageiro@gmail.com",
      recipientEmailAddress: "viniciustestapassos@gmail.com",
      title: "",
      body: "",
      attachment: [],
      copyEmailAddress: []
    }

    try {
      const responseSendEmail = await sendEmailUseCase.execute(sendEmailInput);
    } catch(e) {
      expect(e).toBeInstanceOf(HttpException);
    }
  })
})