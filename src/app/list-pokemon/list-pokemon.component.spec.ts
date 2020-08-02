import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPokemonComponent } from './list-pokemon.component';
import { Router } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { ModalComponent } from '../modal/modal.component';
import { CarouselComponent } from '../carousel/carousel.component';

describe('ListPokemonComponent', () => {
  let component: ListPokemonComponent;
  let fixture: ComponentFixture<ListPokemonComponent>;
  let store: MockStore;

  const pokemonService = jasmine.createSpyObj('PokemonService', ['listPokemonCards']);
  const translateService = jasmine.createSpyObj('TranslateService', ['']);
  const initialState = {
    pokemon: [
      {
        id: 'xy7-10',
        name: 'Vespiquen',
        nationalPokedexNumber: 416,
        imageUrl: 'https://images.pokemontcg.io/xy7/10.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/xy7/10_hires.png',
        types: [
          'Grass'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 1',
        evolvesFrom: 'Combee',
        hp: '90',
        number: '10',
        artist: 'kawayoo',
        rarity: 'Uncommon',
        series: 'XY',
        set: 'Ancient Origins',
        setCode: 'xy7',
        attacks: [
          {
            cost: [
              'Colorless'
            ],
            name: 'Intelligence Gathering',
            text: 'You may draw cards until you have 6 cards in your hand.',
            damage: '10',
            convertedEnergyCost: 1
          },
          {
            cost: [
              'Colorless',
              'Colorless'
            ],
            name: 'Bee Revenge',
            text: 'This attack does 10 more damage for each Pokémon in your discard pile.',
            damage: '20+',
            convertedEnergyCost: 2
          }
        ],
        weaknesses: [
          {
            type: 'Fire',
            value: '×2'
          }
        ]
      },
      {
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
      }
    ]
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Router,
        },
        {
          provide: PokemonService,
          useValue: pokemonService
        },
        {
          provide: TranslateService,
          useValue: translateService
        },
        provideMockStore({ initialState }),
      ],
      declarations: [
        ListPokemonComponent,
        ModalComponent,
        CarouselComponent
      ],
      imports: [TranslateModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // store = TestBed.inject
    fixture = TestBed.createComponent(ListPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('should sort cards by name', () => {
  //   component.cards = [ { name: 'Teste' }, { name: 'Ateste' } ];
  //   component.sortCardsByName();
  //   expect(component.cards[0].name).toEqual('Ateste');
  // });

  // it('should filter by card name', () => {
  //   component.cards = [ { name: 'Teste' }, { name: 'Ateste' } ];
  //   component.filterPokemons({ target: { value: 'Ateste' } });
  //   expect(component.filteredCards[0].name).toEqual('Ateste');
  // });
});
