import { $, ElementFinder, promise } from 'protractor';

export class AddressStepPage {
  private get confirmAddressButton(): ElementFinder {
    return $('#center_column > form > p > button > span');
  }

  public goToConfirmAddress(): promise.Promise<void> {
    return this.confirmAddressButton.click();
  }
}
