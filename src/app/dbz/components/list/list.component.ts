import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public personajeList: Personaje[]=[]

  @Output()
  eliminar : EventEmitter<string> = new EventEmitter();

  eliminarPersonaje(id?:string):void{
    console.log({id});
    if(!id) return;
    this.eliminar.emit(id)
  }
}
