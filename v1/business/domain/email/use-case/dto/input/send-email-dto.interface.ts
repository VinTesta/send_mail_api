import Email from "../../../entity/email.entity";
import EmailAddress from "../../../value-object/email-address.value-object";

export default interface ISendEmailDto {
  recipientEmail: EmailAddress;
  senderEmail: EmailAddress;
  email: Email;
}