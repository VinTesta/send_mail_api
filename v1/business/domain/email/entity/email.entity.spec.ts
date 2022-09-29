import { AttachmentExtensions, AttachmentTypes } from "../../../common/type/common.types";
import Attachment from "../../attachment/entity/attachment.entity";
import Email from "./email.entity";

describe("Email test module", () => {

  describe("Create and add email parts", () => {
    let emailTitle:string = "Receita de bolo da vovó";
    let emailBody:string = "- 2 ovos apenas, chamado também de omelete!";

    test("Should CREATE a new email", () => {
      const email = new Email(emailTitle, emailBody);
      expect(email).toBeDefined();
      expect(email).toBeTruthy();
    })

    test("Should CREATE a new email with no body or title", () => {
      const email = new Email();
      expect(email).toBeDefined();
      expect(email).toBeTruthy();
    })
  
    test("Should ADD a new email attachment in email", () => {
      const email = new Email(emailTitle, emailBody);
      email.addAttachment(new Attachment("receita_bolo", AttachmentExtensions.JPG, AttachmentTypes.JPG, "esseeocorpodareceitadebolodavovo"));
      email.addAttachment(new Attachment("foto_da_vovo", AttachmentExtensions.JPEG, AttachmentTypes.JPEG, "fotodavovo"));

      expect(email.getAttachmentTotal()).toBe(2);
    })

    test('Should return the email body and title', () => {
      const email = new Email(emailTitle, emailBody);
      expect(email.getTitle()).toBe(emailTitle);
      expect(email.getBody()).toBe(emailBody);
    })
  
    test('Should return the empty email body and title', () => {
      const email = new Email();
      expect(email.getTitle()).toBe('');
      expect(email.getBody()).toBe('');
    })
  })
})