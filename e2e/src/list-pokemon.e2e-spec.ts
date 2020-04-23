import { ListPokemonPage } from './list-pokemon.po';
import { browser, logging, element, by, ExpectedConditions } from 'protractor';

describe('list-pokemon-page', () => {
  let page: ListPokemonPage;

  beforeEach(async () => {
    page = new ListPokemonPage();
    await page.navigateTo();
  });

  it('should display filter page', async () => {
    const importantElement = element(by.css('.search-by-name'));
    browser.wait(
        ExpectedConditions.presenceOf(importantElement),
        20000, 'element is not present')
        .then(async () => {
          expect(await page.getFilterTitleText()).toEqual('Filtre pelo nome do Pokemon');
        });
  });

  it('should open card page', async () => {
    const pokemonCard = element(by.css('.pokemon-card-0'));
    browser.wait(
        ExpectedConditions.presenceOf(pokemonCard),
        20000, 'element is not present')
        .then(async () => {
          await pokemonCard.click();
          expect(await browser.getCurrentUrl()).toContain('card/');
        });
  });

  it('should filter pokemon by name', async () => {
    const inputFilterElement = element(by.css('.search-by-name input'));
    browser.wait(
        ExpectedConditions.presenceOf(inputFilterElement),
        20000, 'element is not present')
        .then(async () => {
          await inputFilterElement.sendKeys('Cubone');
          const titleElement = element(by.css('.search-by-name p'));
          await titleElement.click();
          const pokemonName = element(by.css('.pokemon-card .pokemon-card-name h4'));
          expect(await pokemonName.getText()).toEqual('Cubone');
        });
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
