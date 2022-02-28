import { Component, OnInit } from '@angular/core';
import { PokemonCreatedInterface } from '../models/pokemon.created.interface';

@Component({
  selector: 'app-pokemon-created-list',
  templateUrl: './pokemon-created-list.component.html',
  styleUrls: ['./pokemon-created-list.component.scss']
})
export class PokemonCreatedListComponent implements OnInit {

  pokemonCreatedList: PokemonCreatedInterface[] = [];

  constructor() { }

  ngOnInit(): void {
    fetch("http://localhost:3000/pokemon")
    .then(async response => response.json())
    .then(async data => {
      let pokemon: PokemonCreatedInterface;
      for(let i of data){
        pokemon = {
          id: i.id,
          name: i.name,
          frontImage: i.frontImage,
          backImage: i.backImage,
          types: i.types,
        };
        this.pokemonCreatedList.push(pokemon);
      }
    });
  }
}
