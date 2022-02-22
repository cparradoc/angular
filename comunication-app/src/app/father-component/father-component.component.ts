import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father-component',
  templateUrl: './father-component.component.html',
  styleUrls: ['./father-component.component.scss']
})
export class FatherComponentComponent {
  //declaramos nuestra variable
  inputText: string = '';
  
  // Función cada vez que pulsamos una tecla.
  keyUp(letra: string) {
    this.inputText = letra;
  }
}
