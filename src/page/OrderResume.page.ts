import { $, ElementFinder, promise } from 'protractor';

export class OrderResumePage {
  private get selectItem(): ElementFinder {
    return $('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img');
  }

  public goToSelectedItem(): promise.Promise<void> {
    return this.selectItem.click();
  }
}
