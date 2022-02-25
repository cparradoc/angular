import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-detail-main',
  templateUrl: './pokemon-detail-main.component.html',
  styleUrls: ['./pokemon-detail-main.component.scss']
})
export class PokemonDetailMainComponent{
  @Input('pokemonParent') pokemon;
}
