import { browser, element, by } from 'protractor';

export class RobotSimulatorPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getAppBoard() {
    return element(by.css('app-board'));
  }

  getAppCommand() {
    return element(by.css('app-command'));
  }

  getAppManual() {
    return element(by.css('app-manual'));
  }

  getResult() {
    return element(by.id('result'));
  }

}
