import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import * as rootState from '../state/app.state';
import * as pokemonState from '../state/pokemon/pokemon.reducer';
import * as pokemonActions from '../state/pokemon/pokemon.actions';
import { Store, select } from '@ngrx/store';
import { Pokemon, PokemonCard } from '../models/pokemon.model';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit {

  cards: Array<Pokemon>;
  filteredCards: Array<Pokemon>;
  slides: Array<PokemonCard>;

  hasLoaded: boolean;

  constructor(
    private pokemonService: PokemonService,
    private router: Router,
    private translateService: TranslateService,
    private store: Store<rootState.State>
  ) {
    this.hasLoaded = false;
    this.cards = [];
    this.filteredCards = [];
    this.slides = [];
  }

  async ngOnInit(): Promise<void> {
    this.store.pipe(select(pokemonState.listPokemons))
    .subscribe(async (pokemons) => {
      if(!pokemons || pokemons.length === 0) {
        this.cards = await this.pokemonService.listPokemonCards();
        this.sortCardsByName();
        this.store.dispatch(new pokemonActions.SavePokemons(this.cards));
        this.setFilteredPokemons();
      } else {
        this.cards = pokemons;
        this.setFilteredPokemons();
      }
    });
  }

  setFilteredPokemons(): void {
    this.filteredCards = [...this.cards];
    this.setSlides();
    this.hasLoaded = true;
  }

  setSlides(): void {
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

  openCard(id): void {
    this.router.navigate(['/card/' + id]);
  }

  sortCardsByName(): void {
    this.cards.sort((previous, next) => {
      return previous.name < next.name ? -1 : 1;
    });
  }

  filterPokemons(event): void {
    const name = event.target.value;
    if(!name || name.length === 0) {
      this.filteredCards = [...this.cards];
    } else {
      this.filteredCards = this.cards.filter(t => t.name.toUpperCase().indexOf(name.toUpperCase()) !== -1);
    }
    this.setSlides();
  }

}
