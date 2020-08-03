import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';

const routes: Routes = [
  { path: 'card/:id', component: PokemonCardComponent },
  { path: '/cards', component: ListPokemonComponent },
  { path: '**', component: ListPokemonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
