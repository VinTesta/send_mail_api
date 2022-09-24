import { AttachmentExtensions, AttachmentTypes } from "../../../../src/v1/business/common/type/common.types";
import Attachment from "../../../../src/v1/business/domain/attachment/entity/attachment.entity";
import Email from "../../../../src/v1/business/domain/email/email";
import EmailAddress from "../../../../src/v1/business/domain/emailAddress/entity/emailAddress.entity";

describe("Email test module", () => {

  describe("Create and add email parts", () => {
    const senderEmail = new EmailAddress('senderemail@gmail.com');
    const recipientEmail = new EmailAddress('recipientemail@gmail.com');
    let emailTitle:string = "Receita de bolo da vovó";
    let emailBody:string = "- 2 ovos apenas, chamado também de omelete!";

    test("Should CREATE a new email", () => {
      const email = new Email(senderEmail, recipientEmail, emailTitle, emailBody);
      expect(email).toBeDefined();
      expect(email).toBeTruthy();
    })

    test("Should CREATE a new email with no body or title", () => {
      const email = new Email(senderEmail, recipientEmail);
      expect(email).toBeDefined();
      expect(email).toBeTruthy();
    })
  
    test("Should ADD a new email attachment in email", () => {
      const email = new Email(senderEmail, recipientEmail, emailTitle, emailBody);
      email.addAttachment(new Attachment("receita_bolo", AttachmentExtensions.JPG, AttachmentTypes.JPG, "esseeocorpodareceitadebolodavovo"));
      email.addAttachment(new Attachment("foto_da_vovo", AttachmentExtensions.JPEG, AttachmentTypes.JPEG, "fotodavovo"));

      expect(email.getAttachmentTotal()).toBe(2);
    })

    test("Should THROW error on create email with no sender or recipient", () => {
      expect(() => new Email(senderEmail, new EmailAddress('amslasda'), emailTitle, emailBody)).toThrow();
    })
  })
})