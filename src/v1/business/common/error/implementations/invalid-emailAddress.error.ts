import { DefaultMessageError } from "../../type/error-message.type";
import IDetailMessage from "./default/error-detailMessage.error";

export default class InvalidEmailAddressError extends Error {
  statusCode = 400;
  detailsMessage: Array<IDetailMessage> = [];

  constructor() {
    super();
    this.detailsMessage.push({ code: 400, message: "Invalid email address", fields: "emailAddress", type: DefaultMessageError.ERROR });
  }
}