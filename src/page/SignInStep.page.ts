import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private get emailAddressField(): ElementFinder {
    return $('#email');
  }

  private get passwordField(): ElementFinder {
    return $('#passwd');
  }

  private get signInButton(): ElementFinder {
    return $('#SubmitLogin > span');
  }

  public async signIn(emailAddress: string = '', password: string = ''): Promise<void> {
    await this.emailAddressField.sendKeys(emailAddress);
    await this.passwordField.sendKeys(password);
    await this.signInButton.click();
  }
}
