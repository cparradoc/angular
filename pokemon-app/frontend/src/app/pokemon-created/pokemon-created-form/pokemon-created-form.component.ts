import { Component, OnInit, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PokemonCreatedInterface } from '../models/pokemon.created.interface';
import { compareType } from './custom-validator';

@Component({
  selector: 'app-pokemon-created-form',
  templateUrl: './pokemon-created-form.component.html',
  styleUrls: ['./pokemon-created-form.component.scss']
})
export class PokemonCreatedFormComponent implements OnInit {

  public userRegisterForm: FormGroup = null;
  public submitted: boolean = false;

  firstTypeList: string[] = ['normal', 'fire', 'water', 'electric', 'grass', 'ice', 'ground', 'flying', 'ghost', 'rock', 'fighting', 'poison', 'psychic', 'bug', 'dark', 'steel', 'dragon', 'fairy'];
	secondTypeList: string[] = ['', 'normal', 'fire', 'water', 'electric', 'grass', 'ice', 'ground', 'flying', 'ghost', 'rock', 'fighting', 'poison', 'psychic', 'bug', 'dark', 'steel', 'dragon', 'fairy'];

  
  constructor(private formBuilder: FormBuilder) { 
    // Podemos meter valores por defecto en las comillas
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

  ngOnInit() {}

  public onSubmit(): void {
    this.submitted = true;

    if(this.userRegisterForm.valid) {
      let types: string[] = [];
      types.push(this.userRegisterForm.get('firstType').value);
      let secondType = this.userRegisterForm.get('secondType').value;
      if(secondType) { //caso en el que el pokemon tenga dos tipos
        types.push(secondType);
      }
      const pokemon : PokemonCreatedInterface = {
        id: '',
        name: this.userRegisterForm.get('name').value,
        frontImage: this.userRegisterForm.get('frontImage').value,
        backImage: this.userRegisterForm.get('backImage').value,
        types: types
      };

      fetch("http://localhost:3000/pokemon", {
        method: 'POST',
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
  this.removeChild(); 
  this.addChild();
  }

  @ViewChild('vc', { read: ViewContainerRef }) vc: ViewContainerRef;
	@ViewChild('tpl', { read: TemplateRef }) tpl: TemplateRef<any>;

  addChild(){
		let view = this.tpl.createEmbeddedView(null);
		this.vc.insert(view);
	}

  removeChild(){
		if (document.getElementsByClassName("firstView")[0])
			document.getElementsByClassName("firstView")[0].innerHTML= '';
		this.vc.clear();
	}

}
