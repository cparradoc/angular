import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonCreatedInterface } from '../models/pokemon.created.interface';
import { compareType } from '../pokemon-created-form/custom-validator';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pokemon-created-detail',
  templateUrl: './pokemon-created-detail.component.html',
  styleUrls: ['./pokemon-created-detail.component.scss']
})
export class PokemonCreatedDetailComponent implements OnInit {

  id: string;
  types: string[] = [''];
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
      fetch('http://localhost:3000/pokemon-created/' + this.id)
      .then (response => response.json())
      .then (data => {
        this.types.push(data.types.firstType || data.types[0]);
        if(data.types.secondType || data.types[1]) {
          this.types.push(data.types.secondType || data.types[1]);
        }
        
        this.pokemon = 
        {
          id: this.id, name: data.name, frontImage: data.frontImage,
           backImage: data.backImage, types: this.types};
      });
    });
  }

  public async onSubmit(): Promise<void> {

    this.submitted = true;

    if (this.userRegisterForm.valid) {
      let types: string[] = [];
      types.push(this.userRegisterForm.get('firstType').value);
      let type2 = this.userRegisterForm.get('secondType').value;
      if (type2 != '') {
        types.push(type2);}
      const pokemon: PokemonCreatedInterface = {
        id: '',
        name: this.userRegisterForm.get('name').value,
        frontImage: this.userRegisterForm.get('frontImage').value,
        backImage: this.userRegisterForm.get('backImage').value,
        types: types,
      };
      await fetch("http://localhost:3000/pokemon-created/"+this.id, {
        method: 'PATCH',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify(pokemon) 
      });
    }
    this.userRegisterForm.reset();
    this.submitted = false;
    location.reload();
  }

  deletePokemon(){
    fetch('http://localhost:3000/pokemon-created/' + this.id, 
    {method: 'DELETE'});
    this.router.navigate(['created-pokemon']);
  }

  
}
