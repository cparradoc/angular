import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-detail-images',
  templateUrl: './pokemon-detail-images.component.html',
  styleUrls: ['./pokemon-detail-images.component.scss']
})
export class PokemonDetailImagesComponent{
  @Input('pokemonParent') pokemon;
}
