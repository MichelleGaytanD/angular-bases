import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  public heroesNombres:string[]=['Spiderman','Iroman','Thor','Hulk'];
  public removerHeroe?:string;

  removerUltimoHeroe():void{
    this.removerHeroe=this.heroesNombres.pop();
  }





}
