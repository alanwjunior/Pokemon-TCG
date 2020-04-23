import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPokemonComponent } from './list-pokemon.component';
import { Router } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

describe('ListPokemonComponent', () => {
  let component: ListPokemonComponent;
  let fixture: ComponentFixture<ListPokemonComponent>;

  const pokemonService = jasmine.createSpyObj('PokemonService', ['listPokemonCards']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Router,
        },
        {
          provide: PokemonService,
          useValue: pokemonService
        }
      ],
      declarations: [ ListPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sort cards by name', () => {
    component.cards = [ { name: 'Teste' }, { name: 'Ateste' } ];
    component.sortCardsByName();
    expect(component.cards[0].name).toEqual('Ateste');
  });

  it('should filter by card name', () => {
    component.cards = [ { name: 'Teste' }, { name: 'Ateste' } ];
    component.filterPokemons({ target: { value: 'Ateste' } });
    expect(component.filteredCards[0].name).toEqual('Ateste');
  });
});
