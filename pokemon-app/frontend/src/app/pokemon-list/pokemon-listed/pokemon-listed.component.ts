import { Input, Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-listed',
  templateUrl: './pokemon-listed.component.html',
  styleUrls: ['./pokemon-listed.component.scss']
})
export class PokemonListedComponent {

  @Input('pokemonParent') pokemon;
}
