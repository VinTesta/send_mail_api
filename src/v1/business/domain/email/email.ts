import Attachment from "../attachment/entity/attachment.entity";
import EmailAddress from "../emailAddress/entity/emailAddress.entity";

export default class Email {
  private attachmentList: Attachment[] = [];
  constructor(private readonly senderEmail: EmailAddress, private readonly recipientEmail: EmailAddress, 
    private readonly title?: string, private readonly body?: string) {
    
  }

  addAttachment(attachment: Attachment) {
    this.attachmentList.push(attachment);
  }

  getAttachmentTotal(): number {
    return this.attachmentList.length;
  }
}