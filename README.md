# Pokemon TCG App

This is a Web Application built with Angular 9. The API consume Pokemon TCG's API in order to list all pokemons and its details.

The application has two routes:

- /cards: list all pokemons;
- /card/:pokemonId: display details about the specified pokemon.

In order to avoid excessive calls to the API and deliver a better user experience, a store was developed using NgRx and the pokemon list is loaded once. The application has support to PWA and is available on https://tcgpokemonchallenge.web.app/.

## How to run

Using your preferable CLI tool, run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## How to Build

Using your preferable CLI tool, run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Using your preferable CLI tool, run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Using your preferable CLI tool, run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
