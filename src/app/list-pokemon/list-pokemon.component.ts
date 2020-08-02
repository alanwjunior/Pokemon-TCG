import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import * as rootState from '../state/app.state';
import * as pokemonState from '../state/pokemon/pokemon.reducer';
import * as pokemonActions from '../state/pokemon/pokemon.actions';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit {

  cards = [];
  filteredCards = [];
  slides = [];

  hasLoaded = false;

  constructor(
    private pokemonService: PokemonService,
    private router: Router,
    private translateService: TranslateService,
    private store: Store<rootState.State>
  ) { }

  async ngOnInit() {
    this.store.pipe(select(pokemonState.listPokemons))
    .subscribe(async (pokemons) => {
      if(!pokemons || pokemons.length === 0) {
        const result = await this.pokemonService.listPokemonCards();
        this.cards = result && result["cards"] ? result["cards"] : [];
        this.sortCardsByName();
        this.store.dispatch(new pokemonActions.SavePokemons(this.cards));
        this.setFilteredPokemons();
      } else {
        this.cards = pokemons;
        this.setFilteredPokemons();
      }
    });
  }

  setFilteredPokemons() {
    this.filteredCards = [...this.cards];
    this.setSlides();
    this.hasLoaded = true;
  }

  setSlides() {
    this.slides = [];
    this.filteredCards.map(c => {
      this.slides.push({
        src: c.imageUrl,
        title: c.name,
        id: c.id,
        types: c.types
      });
    });
  }

  openCard(id) {
    this.router.navigate(['/card/' + id]);
  }

  sortCardsByName() {
    this.cards.sort((previous, next) => {
      return previous.name < next.name ? -1 : 1;
    });
  }

  filterPokemons(event) {
    const name = event.target.value;
    if(!name || name.length === 0) {
      this.filteredCards = [...this.cards];
    } else {
      this.filteredCards = this.cards.filter(t => t.name.toUpperCase().indexOf(name.toUpperCase()) !== -1);
    }
    this.setSlides();
  }

}
