import { Component, Input, EventEmitter, Output } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  //*! AQUI ESTAMOS DICIENDOLE A LA PARTE HTML (LIST.COMPONENT.HTML) COMO TIENE QUE SER EL LISTADO DE LOS PERSONAJES, EN ESTE CASO LE DECIMOS QUE TIENE QUE TENER UN NOMBRE Y EL PODER DELPERSONAJES, PONEMOS A TRUNKS COMO EJEMPLO.
  //*! AL PONER @INPUT() LE ESTAMOS DICIENDO A ESTA PROPIEDAD QUE LOS DATOS DE CHARACTER PODRAN SER USADOS DIRECTAMENTE.
  @Input()
  public characterList: Character[] = [{
    id: uuid(),
    name: 'Trunks',
    power: 0
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter( id: string ): void {
    //TODO: Emitir el ID del personaje
    this.onDelete.emit( id );
  }

}
