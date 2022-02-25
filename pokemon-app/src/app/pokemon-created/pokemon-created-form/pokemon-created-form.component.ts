import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { compareType } from './custom-validator';

@Component({
  selector: 'app-pokemon-created-form',
  templateUrl: './pokemon-created-form.component.html',
  styleUrls: ['./pokemon-created-form.component.scss']
})
export class PokemonCreatedFormComponent implements OnInit {

  public userRegisterForm: FormGroup = null;
  
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
      validator: compareType('firstType', 'SecondType')
    });
  }

  ngOnInit() {}

  

}
