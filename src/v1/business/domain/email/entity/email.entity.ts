import Attachment from "../../attachment/entity/attachment.entity";

export default class Email {
  attachmentList: Array<Attachment> = [];
  constructor(readonly _title: string, readonly _body: string) { }

  public get title():string { return this._title; }

  public get body():string { return this._body; }

  public addAttachment(attachment: Attachment): void { this.attachmentList.push(attachment); }

  public getAttachmentTotal(): number { return this.attachmentList.length; }
}