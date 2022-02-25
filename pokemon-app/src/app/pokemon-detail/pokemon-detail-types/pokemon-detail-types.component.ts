import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-detail-types',
  templateUrl: './pokemon-detail-types.component.html',
  styleUrls: ['./pokemon-detail-types.component.scss']
})
export class PokemonDetailTypesComponent {
  @Input('pokemonParent') pokemon;
}
