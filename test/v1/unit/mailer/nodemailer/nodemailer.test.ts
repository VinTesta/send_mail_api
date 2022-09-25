import Email from "../../../../../src/v1/business/domain/email/entity/email.entity";
import EmailAddress from "../../../../../src/v1/business/domain/email/value-object/emailAddress.value-object";
import Nodemailer from "../../../../../src/v1/infrastructure/config/mailer/nodemailer/nodemailer"

describe("Nodemailer module", () => {
  test("Should CREATE a new nodemailer", () => {
    const nodemailer = new Nodemailer();
    expect(nodemailer).toBeDefined();
    expect(nodemailer).toBeTruthy();
  })
})