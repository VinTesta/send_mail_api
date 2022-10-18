import { HttpException } from "@nestjs/common";
import InvalidEmailAddressError from "../../../common/error/implementations/invalid-emailAddress.error";
import EmailAddress from "./emailAddress.value-object";

describe('Email Address value object', () => {
  const validEmailAddress = [
    'dummytest@gmail.com',
    'dummytest@yahoo.com'
  ]

  for (const value of validEmailAddress) {
    it(`Should BE POSSIBLE instantiate a new email address with value ${value}`, () => { 
      const emailAddress = new EmailAddress(value);
      expect(emailAddress).toBeTruthy();
      expect(emailAddress).toBeDefined();
      expect(emailAddress.value).toBe(value);
    })
  }

  const invalidEmailAddress = [
    'dummytest@gmail.',
    'dummytest@.com',
    'dummytest',
    '@yahoo.com',
    'dummytest@yahoo',
    ''
  ]

  it.each(invalidEmailAddress)(`Should NOT BE POSSIBLE instatiate a new email address with invalid value %s`, (value) => {
    expect(() => new EmailAddress(value)).toThrow(new HttpException(`Invalid email address - [${value}]`, 401));
  })
})