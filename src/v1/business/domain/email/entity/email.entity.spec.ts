import { Extension } from "../../../common/type/extension.type";
import Attachment from "../../attachment/entity/attachment.entity";
import Email from "./email.entity";

describe("Test email entity", () => {
  let title: string;
  let body: string;
  let defaultEmailTemplate: Email;

  beforeEach(() => {
    title = "This is my title e-mail";
    body = "This is my body e-mail"
    defaultEmailTemplate = new Email(title, body);
  });

  it("Should BE DEFINE a valid email", () => {    
    expect(defaultEmailTemplate.title).toBe(title);
    expect(defaultEmailTemplate.body).toBe(body);
    expect(defaultEmailTemplate).toBeInstanceOf(Email);
    expect(defaultEmailTemplate).toBeTruthy();
  })

  it("Should BE ADD attachment", () => {
    defaultEmailTemplate.addAttachment(new Attachment("attachment_name", Extension.JPG, "as0moamISJSAa23"));
    defaultEmailTemplate.addAttachment(new Attachment("second_attachment", Extension.JPEG, "mISJSAa23"));
    expect(defaultEmailTemplate.getAttachmentTotal()).toBe(2);
  })
})