import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetailInterface } from './models/pokemon.detail.interface';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  id: string;
  types: string[] = [];
  pokemon: PokemonDetailInterface;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( params => {
      this.id = params.get('id');
      fetch('https://pokeapi.co/api/v2/pokemon/' + this.id)
      .then ( response => response.json())
      .then (data => {
        for(let pokemonType of data.types) {
          this.types.push(pokemonType.type.name);
        }
        this.pokemon = 
        {id: this.id, name: data.name, frontImage: data.sprites.front_default,
           backImage: data.sprites.back_default, types: this.types}
      });
    });
  }

}
