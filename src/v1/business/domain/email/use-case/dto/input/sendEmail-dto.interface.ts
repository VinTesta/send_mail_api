import { Extension } from "src/v1/business/common/type/extension.type";
import Attachment from "src/v1/business/domain/attachment/entity/attachment.entity";

export default interface ISendEmailDto {
  senderEmailAddress: string;
  recipientEmailAddress: string;
  title: string;
  body: string;
  attachment: { _name :string, _extension: Extension, _content: string }[];
  copyEmailAddress: Array<string>;
}