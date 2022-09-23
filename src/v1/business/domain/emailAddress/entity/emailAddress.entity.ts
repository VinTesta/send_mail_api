export default class EmailAddress {
  constructor(readonly address: string) {
    if(!this.validateEmailAddress(address)) throw new Error("Email address is invalid");
  }

  validateEmailAddress(emailAddress: string): boolean {
    const [addressName, addressDomain] = emailAddress.split('@');
    const [simpleDomain, superDomain] = addressDomain.split('.');
    if(!superDomain || !addressName) return false;
    return true;
  }
}
