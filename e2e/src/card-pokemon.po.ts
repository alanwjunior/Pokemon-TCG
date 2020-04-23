import { browser, by, element } from 'protractor';

export class CardPokemonPage {

  navigateTo() {
    return browser.get(browser.baseUrl + '/card/dp6-90') as Promise<any>;
  }

  getPokemonName() {
    return element(by.css('.card-name h1')).getText() as Promise<string>;
  }

  getBackListButton() {
    return element(by.css('.back-to-list button'));
  }
}
