import { Component, OnInit } from '@angular/core';
import { PokemonInterface, PokemonResponseInterface } from './models/pokemon.interface';
import { RequestService } from './services/request.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  PokemonResponseInterface: PokemonResponseInterface; //resultado
  pokemonList: PokemonInterface[] = [];
  pokemonFilteredList: PokemonInterface[] = []; //lista filtrada
  filter: string;
  baseURL: string = 'https://pokeapi.co/api/v2/pokemon/?limit=';
  limit: number = 151; //primera generacion

  //Inicializacion/llamada del servicio
  constructor(private RequestService: RequestService) { 
    this.RequestService.getCharacters(this.baseURL + this.limit).
    subscribe( async (data: PokemonResponseInterface) => {
      const results: PokemonInterface[] = data.results;
      let pokemon = [];
      for(let pokeIterable of results) {
        let id = pokeIterable['url'].split('/');
        pokemon.push(await fetch(pokeIterable['url']).then(async (response) => response.json())
          .then(async (data) => {
            return {
              id: Number(id[id.length - 2]),
              name: pokeIterable['name'],
              url: pokeIterable['url'],
              image: data['sprites']['front_default']
            };
          }))
      }
      this.pokemonList = pokemon;
      this.pokemonFilteredList = this.pokemonList;
    });
  }

  ngOnInit(): void {
    callRequestService(this, this.baseURL+'25');
  }

  onChangeFilter(filter: string) {
    const newList: PokemonInterface[] = this.pokemonList.filter(
      pokemon => pokemon.name.toLowerCase().includes(filter.trim().toLowerCase()));
      console.log(newList);
    this.pokemonFilteredList = newList;
  }

}

function callRequestService(context, url: string) {
  //getCharacters oara guardar los resultados
  context.RequestService.getCharacters(url).subscribe( async (data: PokemonResponseInterface) => {
    const results: PokemonInterface[] = data.results;
    let pokemon = [];
      for(let pokeIterable of results) {
        let id = pokeIterable['url'].split('/');
        pokemon.push(await fetch(pokeIterable['url']).then(async (response) => response.json())
          .then(async (data) => {
            return {
              id: Number(id[id.length - 2]),
              name: pokeIterable['name'],
              url: pokeIterable['url'],
              image: data['sprites']['front_default']
            };
          }))
      }
      context.PokemonResponseInterface = data;
      context.PokemonResponseInterface.results = pokemon;
      console.log(pokemon);
  });

}
