import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'unbox-culture-challenge';

  constructor(
    private router: Router
  ) {

  }

  goToPokemonList() {
    this.router.navigate(['/cards'])
  }
}
