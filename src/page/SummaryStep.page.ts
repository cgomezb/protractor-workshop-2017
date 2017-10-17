import { $, ElementFinder, promise } from 'protractor';

export class SummaryStepPage {
  private get proceedToCheckOut(): ElementFinder {
    return $('.cart_navigation span');
  }

  public goToProceedToCheckOut(): promise.Promise<void> {
    return this.proceedToCheckOut.click();
  }
}
