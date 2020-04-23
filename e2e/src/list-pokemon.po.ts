import { browser, by, element } from 'protractor';

export class ListPokemonPage {

  navigateTo() {
    return browser.get(browser.baseUrl + '/cards') as Promise<any>;
  }

  getFilterTitleText() {
    return element(by.css('.search-by-name p')).getText() as Promise<string>;
  }
}
