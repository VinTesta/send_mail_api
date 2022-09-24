import EmailAddress from "../../../../src/v1/business/domain/emailAddress/entity/emailAddress.entity";

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
})