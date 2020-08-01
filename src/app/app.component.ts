import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'unbox-culture-challenge';

  constructor(
    private router: Router,
    private translate: TranslateService
  ) {
    translate.addLangs(['en', 'pt']);
    translate.setDefaultLang('pt');
    this.changeLang('pt');
  }

  changeLang(language: string) {
    localStorage.setItem('language', language);
    this.translate.use(language);
  }

  goToPokemonList() {
    this.router.navigate(['/cards']);
  }
}
