import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  card: Pokemon;
  cardHasAttacksResistanceWeakness: boolean;
  hasLoaded: boolean;
  selectedAttack = null;
  isAttackModalOpened = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService,
    private router: Router
  ) {
    this.card = null;
    this.cardHasAttacksResistanceWeakness = false;
    this.hasLoaded = false;
  }

  async ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.card = await this.pokemonService.getCard(id);
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

  openModalAttackDetails(attack) {
    this.selectedAttack = attack;
    this.isAttackModalOpened = true;
  }

  closeAttackModal() {
    this.selectedAttack = null;
    this.isAttackModalOpened = false;
  }
}
