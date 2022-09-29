import ISendEmailDto from "../../../../../src/v1/business/domain/email/use-case/dto/input/send-email-dto.interface";
import EmailAddress from "../../../../../src/v1/business/domain/email/value-object/email-address.value-object";
import Email from "../../../../../src/v1/business/domain/email/entity/email.entity";
import SendEmail from "../../../../../src/v1/business/service/email/use-case/sendEmail.use-case"
import MailerAdapter from "../../../../../src/v1/infrastructure/adapter/mailer/mailer.adapter"
import InMemoryMailer from "../../../../../src/v1/infrastructure/config/mailer/in-memory/in-memory-mailer";
import NodeMailer from "../../../../../src/v1/infrastructure/config/mailer/nodemailer/nodemailer";

describe("Send email module test", () => {
  let mailer: MailerAdapter;
  let emailTitle:string = "E-mail de teste";
  let emailBody:string = "Estamos enviando esse e-mail para testarmos o nosso servi�o!";

  beforeEach(() => {
    mailer = new InMemoryMailer();
  })

  test("Should send a email", async () => {
    const sendEmail = new SendEmail(mailer);
    const spy = jest.spyOn(mailer, 'send');
    const sendEmailInput: ISendEmailDto = {
      recipientEmail: new EmailAddress("vinicius.passos@kabum.com.br"),
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