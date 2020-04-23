import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  api = 'https://api.pokemontcg.io/v1/';

  constructor(
    private http: HttpClient
  ) { }

  async listPokemonCards() {
    try {
      const result = await this.http.get(this.api + '/cards').toPromise();
      return result;
    } catch(e) {
      console.error(e);
    }
  }

  async getCard(id) {
    try {
      const result = await this.http.get(this.api + '/cards?id=' + id).toPromise();
      return result;
    } catch(e) {
      console.error(e);
    }
  }
}
