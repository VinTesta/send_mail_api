import { DefaultMessageError } from "../../../type/error-message.type";

export default interface IDetailMessage {
  code: number;
  message: string;
  fields: string;
  type: DefaultMessageError;
}