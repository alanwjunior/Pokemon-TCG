import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { PokemonCard } from '../models/pokemon.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0, transform: 'scale(0.5)' }),
        animate(
          '1300ms cubic-bezier(0.785, 0.135, 0.15, 0.86)',
          style({ opacity: 1, transform: 'scale(1)' })
        )
      ]),
      transition('* => void', [
        animate(
          '1300ms cubic-bezier(0.785, 0.135, 0.15, 0.86)',
          style({ opacity: 0, transform: 'scale(0.5)' })
        )
      ])
    ])
  ]
})
export class CarouselComponent implements OnInit {

  @Input() slides: Array<PokemonCard>;

  currentSlide: number;

  constructor(
    private router: Router
  ) {
    this.currentSlide = 0;
  }

  ngOnInit() {

  }

  onPreviousClick(): void {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick(): void {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }

  openPokemonDetails(): void {
    this.router.navigate(['/card/' + this.slides[this.currentSlide].id]);
  }

}
