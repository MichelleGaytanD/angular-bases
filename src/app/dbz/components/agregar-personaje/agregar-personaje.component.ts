import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
  styleUrl: './agregar-personaje.component.css'
})
export class AgregarPersonajeComponent {

  @Output()
  public nuevoPersonaje: EventEmitter<Personaje>=new EventEmitter();


  public personaje: Personaje={
    nombre: '',
    poder:0
  };

  enviarPersonaje():void{
    console.log(this.personaje);

    if(this.personaje.nombre.length===0) return;
    if(this.personaje.poder===0) return;

    this.nuevoPersonaje.emit({...this.personaje});


    this.personaje.nombre='';
    this.personaje.poder=0;
  }
}
