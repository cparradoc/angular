import { Component, OnInit } from '@angular/core';
import { PokemonCreatedInterface } from '../models/pokemon.created.interface';
import { compareType } from '../pokemon-created-form/custom-validator';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pokemon-created-detail',
  templateUrl: './pokemon-created-detail.component.html',
  styleUrls: ['./pokemon-created-detail.component.scss']
})
export class PokemonCreatedDetailComponent implements OnInit {

  id: string;
  types: string[] = [];
  pokemon: PokemonCreatedInterface;

  firstTypeList: string[] = ['normal', 'fire', 'water', 'electric', 'grass', 'ice', 'ground', 'flying', 'ghost', 'rock', 'fighting', 'poison', 'psychic', 'bug', 'dark', 'steel', 'dragon', 'fairy'];
	secondTypeList: string[] = ['', 'normal', 'fire', 'water', 'electric', 'grass', 'ice', 'ground', 'flying', 'ghost', 'rock', 'fighting', 'poison', 'psychic', 'bug', 'dark', 'steel', 'dragon', 'fairy'];

  public userRegisterForm: FormGroup = null;
  public submitted: boolean = false;


  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) {
    this.userRegisterForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      frontImage: ['', [Validators.required, Validators.maxLength(200)]],
      backImage: ['', [Validators.required, Validators.maxLength(200)]],
      firstType: ['', [Validators.required]],
      secondType: ['']
    },
    {
      validator: compareType('firstType', 'secondType')
    });
   }

   ngOnInit() {
    this.route.paramMap.subscribe( params => {
      this.id = params.get('id');
      fetch('https://localhost:3000/pokemon/' + this.id)
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

  deletePokemon(){
    fetch('http://localhost:3000/pokemon/' + this.id, 
    {method: 'DELETE'});
    this.router.navigate(['created-pokemon']);
  }

  
}
