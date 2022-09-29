import EmailAddress from "./email-address.value-object";

describe('Mail Address module', () => {
  it('Should CREATE a new Mail Address',  () => {
    const emailAddress = new EmailAddress('josetestador@gmail.com');

    expect(emailAddress).toBeDefined();
    expect(emailAddress).toBeTruthy();
  })

  const emailList: Array<string> = ['', 'josetestador', 'josetestador@gmail', 'josetestador@gmail.', '@gmail.com']
  describe.each(emailList)(`Should THROW an error when create a new email address`, (email) => {
    it(`Should THROW an error when create a new Mail Address with ${email}`, () => {
      let emailAddress: EmailAddress;
      expect(() => emailAddress = new EmailAddress(email)).toThrow();
    })
  })

  it('Should RETURN the email address', () => {
    const emailAddress = new EmailAddress("teste@gmail.com");
    expect(emailAddress.getAddress()).toBe("teste@gmail.com");
  })
})