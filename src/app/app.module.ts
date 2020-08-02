import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { LoaderSpinnerComponent } from './loader-spinner/loader-spinner.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { CarouselComponent } from './carousel/carousel.component';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ModalComponent } from './modal/modal.component';
import { StoreModule } from '@ngrx/store';
import * as pokemonState from './state/pokemon/pokemon.reducer';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ListPokemonComponent,
    PokemonCardComponent,
    LoaderSpinnerComponent,
    CarouselComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot(
      {
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
        }
      }
    ),
    StoreModule.forRoot({
      pokemons: pokemonState.reducer
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    TranslateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private translate: TranslateService,

  ) {
    this.translate.setDefaultLang('en');
    translate.use('en');
  }
}
