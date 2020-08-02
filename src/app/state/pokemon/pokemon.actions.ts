import { Action } from '@ngrx/store';

export enum PokemonActionTypes {
  SavePokemons = '[Pokemon] Save Pokemons'
}

export class SavePokemons implements Action {
  readonly type = PokemonActionTypes.SavePokemons;

  constructor(public payload: object) { }
}

export type PokemonActions = SavePokemons;
