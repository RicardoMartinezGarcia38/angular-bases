import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {


  //*! ESTO ES UN ARREGLO DE PERSONAJES, RECUERDA QUE TIENES QUE DEFINIR EL TIPO DE DATO ( EN ESTE CASO DEFINIMOS UNA INTERFAZ EN LA CARPETA DE INTERFACES ) DE HAY CREAMOS LA INTERFAZ CHARACTER Y ESE ES EL TIPO DE DATO QUE DEFINIMOS AQUI.
  public characters: Character[] = [{
    name: 'Krillin',
    power: 1000,
  },{
    name: 'Goku',
    power: 9500,
  },{
    name: 'Vegeta',
    power: 12000,
  }];

  onNewCharacter( character: Character ): void {
    this.characters.unshift( character );

  }

}
