import { browser, logging, element, by, ExpectedConditions } from 'protractor';
import { CardPokemonPage } from './card-pokemon.po';

describe('pokemon-card-page', () => {
  let page: CardPokemonPage;

  beforeEach(async () => {
    page = new CardPokemonPage();
    await page.navigateTo();
  });

  it('should display pokemon name', async () => {
    const loadElement = element(by.css('.card-name'));
    browser.wait(
        ExpectedConditions.presenceOf(loadElement),
        20000, 'element is not present')
        .then(async () => {
          expect(await page.getPokemonName()).toContain('Cubone');
        });
  });

  it('back to list', async () => {
    const backToListElement = element(by.css('.card-container .back-to-list'));
    browser.wait(
        ExpectedConditions.presenceOf(backToListElement),
        20000, 'element is not present')
        .then(async () => {
          const buttonElement = page.getBackListButton();
          await buttonElement.click();
          expect(await browser.getCurrentUrl()).toContain('cards');
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
