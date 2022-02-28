import { Component, OnInit } from '@angular/core';
import { PokemonCreatedInterface } from '../models/pokemon.created.interface';
import { compareType } from '../pokemon-created-form/custom-validator';
import { Router, ActivatedRoute } from '@angular/router';
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


  constructor(private formBuilder: FormBuilder) {
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

  ngOnInit(): void {
  }

}
