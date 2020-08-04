import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardComponent } from './pokemon-card.component';
import { AppModule } from '../app.module';
import { APP_BASE_HREF } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PokemonService } from '../services/pokemon.service';
import { TranslateModule } from '@ngx-translate/core';
import { ModalComponent } from '../modal/modal.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PokemonCardComponent', () => {
  let fixture: ComponentFixture<PokemonCardComponent>;
  let component: PokemonCardComponent;

  const pokemonService = jasmine.createSpyObj('PokemonService', ['getCard']);
  pokemonService.getCard.and.callFake(() => {
    return {
      id: 'xyp-XY05',
      name: 'Xerneas',
      nationalPokedexNumber: 716,
      imageUrl: 'https://images.pokemontcg.io/xyp/XY05.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/xyp/XY05_hires.png',
      types: [
        'Fairy'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '130',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: 'XY05',
      artist: '5ban Graphics',
      rarity: 'Rare',
      series: 'XY',
      set: 'XY Black Star Promos',
      setCode: 'xyp',
      attacks: [
        {
          cost: [
            'Fairy'
          ],
          name: 'Geomancy',
          text: 'Choose 2 of your Benched Pokémon. Shuffle your deck afterward.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Fairy',
            'Fairy',
            'Colorless'
          ],
          name: 'Rainbow Spear',
          text: 'Discard an Energy attached to this Pokémon.',
          damage: '100',
          convertedEnergyCost: 3
        }
      ],
      resistances: [
        {
          type: 'Darkness',
          value: '-20'
        }
      ],
      weaknesses: [
        {
          type: 'Metal',
          value: '×2'
        }
      ]
    };
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get(name) { return '123'; }
              }
            },
          },
        },
        {
          provide: PokemonService,
          useValue: pokemonService
        }
      ],
      declarations: [
        PokemonCardComponent,
        ModalComponent
      ],
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot()
      ]
    }).compileComponents();
  }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(PokemonCardComponent);
    component = fixture.componentInstance;
    await component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create component', (() => {
    fixture = TestBed.createComponent(PokemonCardComponent);
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

  it('pokemon has attack', () => {
    fixture.detectChanges();
    component.hasAttacksOrResistanceOrWeakness();
    expect(component.cardHasAttacksResistanceWeakness).toEqual(true);
  });

  it('pokemon has resistance', () => {
    component.hasAttacksOrResistanceOrWeakness();
    expect(component.cardHasAttacksResistanceWeakness).toEqual(true);
  });

  it('pokemon has weaknesses', () => {
    fixture.detectChanges();
    fixture.componentInstance.hasAttacksOrResistanceOrWeakness();
    expect(fixture.componentInstance.cardHasAttacksResistanceWeakness).toEqual(true);
  });
});
