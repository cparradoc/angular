import { Component, OnInit } from '@angular/core';
import { PokemonInterface, PokemonResponseInterface } from './models/pokemon.interface';
import { RequestService } from './services/request.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  PokemonResponseInterface: PokemonResponseInterface;
  constructor() { }

  ngOnInit(): void {
  }

}
