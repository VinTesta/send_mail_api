import Email from "../../../business/domain/email/entity/email.entity";
import ISendEmailDto from "../../../business/domain/email/use-case/dto/input/sendEmailDto.interface";

export default interface MailerAdapter {
  send(emailDto: ISendEmailDto): Promise<boolean>;
}