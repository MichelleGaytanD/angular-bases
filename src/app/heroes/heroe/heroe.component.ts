import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})

export class HeroeComponent {

  public nombre: string='Iroman';
  public edad: number=45;

  get nombreCapitalizado():string{
    return this.nombre.toUpperCase();
  }


  getHeroeDescripcion():string{
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarHeroe():void{
    this.nombre='Superman';
  }

  cambiarEdad():void{
    this.edad=30;
  }

  resetDatos():void{
    this.nombre="Iroman";
    this.edad=45;
  }

}
