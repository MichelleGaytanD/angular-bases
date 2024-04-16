import { NgModule } from "@angular/core";
import { ContadorComponente } from "./componentes/contador/contador.component";

@NgModule({
  declarations:[
    ContadorComponente
  ],
  exports:[
    ContadorComponente
  ]
})
export class ContadorModule{}
