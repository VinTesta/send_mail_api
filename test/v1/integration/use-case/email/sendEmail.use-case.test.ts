import Email from "../../../../../src/v1/business/domain/email/entity/email.entity";
import ISendEmailDto from "../../../../../src/v1/business/domain/email/use-case/dto/input/sendEmailDto.interface";
import ISendEmail from "../../../../../src/v1/business/domain/email/use-case/sendEmail.interface";
import EmailAddress from "../../../../../src/v1/business/domain/email/value-object/emailAddress.value-object";
import SendEmail from "../../../../../src/v1/business/service/email/use-case/sendEmail.use-case"
import MailerAdapter from "../../../../../src/v1/infrastructure/adapter/mailer/mailer.adapter"
import InMemoryMailer from "../../../../../src/v1/infrastructure/config/mailer/in-memory/in-memory-mailer";

describe("Send email module test", () => {
  let mailer: MailerAdapter;
  let sendEmail: ISendEmail;
  let emailTitle:string = "E-mail de teste";
  let emailBody:string = "Estamos enviando esse e-mail para testarmos o nosso serviço!";

  beforeEach(() => {
    mailer = new InMemoryMailer();
    sendEmail = new SendEmail(mailer);
  })

  test("Should send a email", async () => {
    const spy = jest.spyOn(mailer, 'send');
    const sendEmailInput: ISendEmailDto = {
      recipientEmail: new EmailAddress("destinatarioteste@gmail.com"),
      senderEmail: new EmailAddress("Remetente Teste <remetenteteste@gmail.com>"),
      email: new Email(emailTitle, emailBody),
    }

    return await sendEmail.execute(sendEmailInput).then((mailSent) => {
      expect(mailSent).toBeTruthy();
      expect(spy).toHaveBeenCalled();
    });
  })

  afterEach(() => {
    jest.restoreAllMocks();
  });
})