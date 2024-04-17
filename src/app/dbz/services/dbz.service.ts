import { Inject, Injectable } from "@angular/core";
import { Personaje } from "../interfaces/personaje.interface";
import {v4 as uuid} from 'uuid';

@Injectable({
  providedIn:'root'
})

export class DbzService{

  public personajes:Personaje[]=[{
    id:uuid(),
    nombre:'Krillin',
    poder:100
  },{
    id:uuid(),
    nombre:'Goku',
    poder:900
  },{
    id:uuid(),
    nombre:'Vegeta',
    poder:700
  }];

  nuevoPersonaje(personaje:Personaje):void{

    const newPersonaje:Personaje={id:uuid(), ...personaje}

    this.personajes.push(newPersonaje);
  }

  eliminarPersonajePorId(id:string){
    this.personajes = this.personajes.filter(personaje=>personaje.id != id);
  }

}


