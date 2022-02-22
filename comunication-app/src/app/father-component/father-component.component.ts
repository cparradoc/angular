import { Component } from '@angular/core';

@Component({
  selector: 'app-father-component',
  templateUrl: './father-component.component.html',
  styleUrls: ['./father-component.component.scss']
})
export class FatherComponentComponent {
  //declaramos nuestra variable
  inputText: string = '';
  // Variable donde almacenamos el valor del hijo
  sonMessage: string = '';
  
  // Función cada vez que pulsamos una tecla.
  keyUp(letra: string) {
    this.inputText = letra;
  }
  // Recibe el mensaje del hijo  
  setMessage(message: string): void {
    this.sonMessage = message;
  }
}
