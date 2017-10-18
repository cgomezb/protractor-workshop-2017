import { $, ElementFinder, promise } from 'protractor';

export class ProductListPage {
  private get resultOrder(): ElementFinder {
    return $('#center_column > div > p > strong');
  }

  public getResultTextOrder(): promise.Promise<string> {
    return this.resultOrder.getText();
  }
}
