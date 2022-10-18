import { Extension } from "../../../common/type/extension.type";

export default class Attachment {
  constructor(readonly _name: string, readonly _extension: Extension, readonly _content: string) {}
}