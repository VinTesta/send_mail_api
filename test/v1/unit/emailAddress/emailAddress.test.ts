import EmailAddress from "../../../../src/v1/business/domain/email/value-object/emailAddress.value-object";

describe('Mail Address module', () => {
  test('Should CREATE a new Mail Address',  () => {
    const emailAddress = new EmailAddress('josetestador@gmail.com');

    expect(emailAddress).toBeDefined();
    expect(emailAddress).toBeTruthy();
  })

  const emailList: Array<string> = ['', 'josetestador', 'josetestador@gmail', 'josetestador@gmail.', '@gmail.com']
  describe.each(emailList)(`Should THROW an error when create a new email address`, (email) => {
    test(`Should THROW an error when create a new Mail Address with ${email}`, () => {
      let emailAddress: EmailAddress;
      expect(() => emailAddress = new EmailAddress(email)).toThrow();
    })
  })

  test('Should RETURN the email address', () => {
    const emailAddress = new EmailAddress("teste@gmail.com");
    expect(emailAddress.getAddress()).toBe("teste@gmail.com");
  })
})