import { Component, OnInit } from '@angular/core';
import { PokemonInterface, PokemonResponseInterface } from '../pokemon-list/models/pokemon.interface';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-pokemon-mix',
  templateUrl: './pokemon-mix.component.html',
  styleUrls: ['./pokemon-mix.component.scss']
})
export class PokemonMixComponent implements OnInit {

  pokemonList: PokemonInterface[] = [];
  pokemonFilteredList: PokemonInterface[] = []; //lista filtrada
  filter: string = '';
  baseURL: string = 'https://pokeapi.co/api/v2/pokemon/?limit=';
  limit: number = 151; //primera generacion

  //pokemon reales
  constructor(private requestService: RequestService) { 
    this.requestService.getCharacters(this.baseURL+this.limit).subscribe(
      async (data: PokemonResponseInterface) => {
        const results: PokemonInterface[] = data.results;
        for(let pokemon of results) {
          let id = pokemon['url'].split('/');
          this.pokemonList.push(await fetch(pokemon['url']).then(async response => response.json())
            .then(async (data) => {
              return { id: Number(id[id.length - 2]), name: pokemon['name'], url: pokemon['url'], image: data['sprites']['front_default'] };
            }));
        }
      });

    //pokemon creados
    fetch("http://localhost:3000/pokemon-created")
    .then( async response => await response.json())
    .then(async data => {
      for (let pokeIterable of data){
        this.pokemonList.push({
          id: pokeIterable.id,
          name: pokeIterable.name,
          url: '',
          image: pokeIterable.frontImage,
        });
      }
    });

  }

  async ngOnInit() {
  }

}
