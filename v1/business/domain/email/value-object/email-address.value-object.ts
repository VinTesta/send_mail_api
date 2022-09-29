export default class EmailAddress {
  constructor(private readonly address: string) {
    if(!this.validateEmailAddress(address)) throw new Error("Email address is invalid");
  }

  private validateEmailAddress(emailAddress: string): boolean {
    if(!emailAddress) throw new Error("Inválid e-mail!");
    const [addressName, addressDomain] = emailAddress.split('@');
    const [simpleDomain, superDomain] = addressDomain.split('.');
    if(!superDomain || !addressName) return false;
    return true;
  }

  getAddress():string {
    return this.address;
  }
}
