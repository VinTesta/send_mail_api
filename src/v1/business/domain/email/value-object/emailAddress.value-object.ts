import { HttpException } from "@nestjs/common";

export default class EmailAddress {
  constructor(private readonly _value: string) {
    if(!this.validateEmailAddress(_value)) throw new HttpException(`Invalid email address - [${_value}]`, 401);
  }

  private validateEmailAddress(emailAddress: string): boolean {
    if(!emailAddress) return false;
    const [addressName, addressDomain] = emailAddress.split('@');
    if(!addressDomain) return false;
    const [simpleDomain, superDomain] = addressDomain.split('.');
    if(!superDomain || !addressName || !simpleDomain) return false;
    return true;
  }

  public get value():string {
    return this._value;
  }
}