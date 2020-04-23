import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  card = null;
  cardHasAttacksResistanceWeakness = false;
  hasLoaded = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService,
    private router: Router
  ) { }

  async ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    const result = await this.pokemonService.getCard(id);
    this.card = result && result["cards"] && result["cards"].length > 0 ? result["cards"][0] : null;
    this.hasAttacksOrResistanceOrWeakness();
    this.hasLoaded = true;
  }

  hasAttacksOrResistanceOrWeakness() {
    this.cardHasAttacksResistanceWeakness =
      (this.card && this.card.attacks && this.card.attacks.length > 0) ||
      (this.card && this.card.resistances && this.card.resistances.length > 0) ||
      (this.card && this.card.weaknesses && this.card.weaknesses.length > 0);
  }

  backToList() {
    this.router.navigate(['/cards']);
  }
}
