import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private get agreeCheckBox(): ElementFinder {
    return $('#cgv');
  }

  private get proceedToCheckOutButton(): ElementFinder {
    return $('#form > p > button > span');
  }

  public async goToAgreeTermsOfService(): Promise<void> {
    await this.agreeCheckBox.click();
    await this.proceedToCheckOutButton.click();
  }
}
