import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PokemonHomeComponent } from './pokemon-home/pokemon-home.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { PokemonHomeInfoComponent } from './pokemon-home/pokemon-home-info/pokemon-home-info.component';
import { PokemonHomeWebinfoComponent } from './pokemon-home/pokemon-home-webinfo/pokemon-home-webinfo.component';
import { PokemonHomeListComponent } from './pokemon-home/pokemon-home-list/pokemon-home-list.component';
import { PokemonListedComponent } from './pokemon-list/pokemon-listed/pokemon-listed.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonHomeComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    NavBarComponent,
    FooterComponent,
    PokemonHomeInfoComponent,
    PokemonHomeWebinfoComponent,
    PokemonHomeListComponent,
    PokemonListedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//requerido para compilacion AOT (ahead of time)
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}