import { AttachmentExtensions, AttachmentTypes } from "../../../common/type/common.types";

export default class Attachment {
  constructor(readonly name: String, readonly extension: AttachmentExtensions, readonly type: AttachmentTypes, readonly content: String) {
    if(!name) throw new Error("Name cannot be null");
    if(!extension) throw new Error("Extension cannot be null");
    if(!content) throw new Error("Content cannot be null");
    if(!type) throw new Error("Type cannot be null");
  }
}