import { Component } from "@angular/core";

@Component({
  selector: 'app-contador',
  template: `

  <p>Contador: {{contador}}</p>

  <button (click)="incrementar(+1)">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="incrementar(-1)">-1</button>

  `
})
export class ContadorComponente{
  public contador:number=10;

  incrementar( valor:number):void{
    this.contador+=valor;
  }
  reset(){
    this.contador=10;
  }
}
