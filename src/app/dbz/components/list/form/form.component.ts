import { Component, EventEmitter, Output } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from 'src/app/dbz/interfaces/character.interface';

@Component({
  selector: 'dbz-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: uuid(),
    name: '',
    power: 0
  };

  emitCharacter(): void {
    console.log(this.character);
    if ( this.character.name.length === 0 ) return;

    this.onNewCharacter.emit({...this.character});

    this.character.name = '';
    this.character.power = 0;

    /*this.character= {
      id: uuid(),
      name: '',
      power: 0
    }*/
  }
}
