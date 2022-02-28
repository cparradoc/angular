import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonCreatedDetailComponent } from './pokemon-created/pokemon-created-detail/pokemon-created-detail.component';
import { PokemonCreatedComponent } from './pokemon-created/pokemon-created.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonHomeComponent } from './pokemon-home/pokemon-home.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

const routes: Routes = [
  {path: "", component: PokemonHomeComponent},
  {path: "pokemon-list", component: PokemonListComponent},
  {path: "pokemon/:id", component: PokemonDetailComponent},
  {path: "pokemon-created", component: PokemonCreatedComponent},
  {path: "pokemon-created/:id", component: PokemonCreatedDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
