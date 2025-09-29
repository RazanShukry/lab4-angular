import { CreditCardFromatPipe } from './credit-card-fromat-pipe';

describe('CreditCardFromatPipe', () => {
  it('create an instance', () => {
    const pipe = new CreditCardFromatPipe();
    expect(pipe).toBeTruthy();
  });
});
