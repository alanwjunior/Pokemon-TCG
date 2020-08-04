import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon, PokemonApiResponse } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  api = 'https://api.pokemontcg.io/v1/';

  constructor(
    private http: HttpClient
  ) { }

  async listPokemonCards(): Promise<Array<Pokemon>> {
    try {
      const result = await this.http.get<PokemonApiResponse>(this.api + '/cards').toPromise<PokemonApiResponse>();
      return result && result.cards ? result.cards : [];
    } catch(e) {
      console.error(e);
    }
  }

  async getCard(id): Promise<Pokemon> {
    try {
      const result = await this.http.get<PokemonApiResponse>(this.api + '/cards?id=' + id).toPromise<PokemonApiResponse>();
      return result && result.cards && result.cards.length > 0 ? result.cards[0] : null;
    } catch(e) {
      console.error(e);
    }
  }
}
