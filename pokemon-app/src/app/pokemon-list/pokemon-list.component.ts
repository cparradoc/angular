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
  baseURL: string = 'https://pokeapi.co/api/v2/pokemon/?limit=';
  limit: number = 151; //primera generacion

  //Inicializacion/llamada del servicio
  constructor(private RequestService: RequestService) { 
    this.RequestService.getCharacters(this.baseURL + this.limit).
    subscribe( async (data: PokemonResponseInterface) => {
      const results: PokemonInterface[] = data.results;
      let pokemon = [];
      for(let pokeIterable in results) {
        let id = pokeIterable['url'].split('/');
        await pokemon.push(await fetch(pokemon['url']).then(async response => response.json())
        .then(async data => {
          return { id: Number(id[id.length - 2]),
                  name: pokemon['name'],
                  url: pokemon['url'],
                  image: data['sprites']['front_default']};
        }))
      }
      this.pokemonList = pokemon;
      console.log(this.pokemonList);
    });
  }

  ngOnInit(): void {
    callRequestService(this.baseURL+'25');
  }
}

function callRequestService(url: string) {
  //getCharacters oara guardar los resultados
  this.RequestService.getCharacters(url).subscribe( async (data: PokemonResponseInterface) => {
    const results: PokemonInterface[] = data.results;
    let pokemon = [];
      for(let pokeIterable in results) {
        let id = pokeIterable['url'].split('/');
        await pokemon.push(await fetch(pokemon['url']).then(async response => response.json())
        .then(async data => {
          return { id: Number(id[id.length - 2]),
                  name: pokemon['name'],
                  url: pokemon['url'],
                  image: data['sprites']['front_default']};
        }))
      }
      this.PokemonResponseInterface = data;
      this.PokemonResponseInterface.results = pokemon;
  });

}
