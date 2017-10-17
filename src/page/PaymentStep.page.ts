import { $, ElementFinder, promise } from 'protractor';

export class PaymentStepPage {
  private get selectPaymentOption(): ElementFinder {
    return $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public goToPayment(): promise.Promise<void> {
    return this.selectPaymentOption.click();
  }
}
