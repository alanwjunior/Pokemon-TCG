import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PokemonActions, PokemonActionTypes } from './pokemon.actions';

export interface PokemonState {
  pokemons: Array<any>;
}

const initialState: PokemonState = {
  pokemons: []
};

// Selector functions
const getPokemons = createFeatureSelector<PokemonState>('pokemons');

export const listPokemons = createSelector(
  getPokemons,
  state => state.pokemons
);

export function reducer(state = initialState, action: PokemonActions): PokemonState {
  switch (action.type) {
    case PokemonActionTypes.SavePokemons:
      let pokemons = [...state.pokemons];
      pokemons = pokemons.concat(action.payload);
      return {
        ...state,
        pokemons
      };
    default:
      return state;
  }
}
