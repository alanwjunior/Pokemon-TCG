import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardComponent } from './pokemon-card.component';
import { AppModule } from '../app.module';
import { APP_BASE_HREF } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PokemonService } from '../services/pokemon.service';
import { TranslateModule } from '@ngx-translate/core';
import { ModalComponent } from '../modal/modal.component';

describe('PokemonCardComponent', () => {
  let fixture: ComponentFixture<PokemonCardComponent>;
  let component: PokemonCardComponent;

  const pokemonService = jasmine.createSpyObj('PokemonService', ['getCard']);
  pokemonService.getCard.and.callFake(() => {
    return {
      cards: [
        {
          imageUrl: "https://images.pokemontcg.io/dp6/90.png",
          imageUrlHiRes: "https://images.pokemontcg.io/dp6/90_hires.png",
          attacks: [{ name: 'Teste' }]
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
        },
        {
          provide: Router,
        }
      ],
      declarations: [
        PokemonCardComponent,
        ModalComponent
      ],
      imports: [TranslateModule.forRoot()]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', (() => {
    fixture = TestBed.createComponent(PokemonCardComponent);
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

  // it('pokemon has attack', () => {
  //   component.card = {
  //     imageUrl: "https://images.pokemontcg.io/dp6/90.png",
  //     imageUrlHiRes: "https://images.pokemontcg.io/dp6/90_hires.png",
  //     attacks: [{ name: 'Teste' }]
  //   };
  //   fixture.detectChanges();
  //   component.hasAttacksOrResistanceOrWeakness();
  //   expect(component.cardHasAttacksResistanceWeakness).toEqual(true);
  // });

  // it('pokemon has resistance', () => {
  //   component.card = {
  //     imageUrl: "https://images.pokemontcg.io/dp6/90.png",
  //     imageUrlHiRes: "https://images.pokemontcg.io/dp6/90_hires.png",
  //     resistances: [{ name: 'Teste' }]
  //   };
  //   component.hasAttacksOrResistanceOrWeakness();
  //   expect(component.cardHasAttacksResistanceWeakness).toEqual(true);
  // });

  // it('pokemon has weaknesses', () => {
  //   fixture.componentInstance.card = {
  //     imageUrl: "https://images.pokemontcg.io/dp6/90.png",
  //     imageUrlHiRes: "https://images.pokemontcg.io/dp6/90_hires.png",
  //     weaknesses: [{ name: 'Teste' }]
  //   };
  //   fixture.detectChanges();
  //   fixture.componentInstance.hasAttacksOrResistanceOrWeakness();
  //   expect(fixture.componentInstance.cardHasAttacksResistanceWeakness).toEqual(true);
  // });
});
