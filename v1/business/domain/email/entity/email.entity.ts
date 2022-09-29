import Attachment from "../../attachment/entity/attachment.entity";

export default class Email {
  private attachmentList: Attachment[] = [];
  constructor(private readonly title?: string, private readonly body?: string) { }

  addAttachment(attachment: Attachment) {
    this.attachmentList.push(attachment);
  }

  getAttachmentTotal(): number {
    return this.attachmentList.length;
  }

  getBody():string {
    return this.body || '';
  }

  getTitle():string {
    return this.title || '';
  }
}