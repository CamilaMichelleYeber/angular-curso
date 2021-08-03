import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';


@NgModule({
    declarations:[
        //en las declaraciones va todo lo que son mis componentes
        ContadorComponent
    ],
    
    exports :[
      //aca irá lo que yo quiero que sea visible/publicas fuera de este modulo
     ContadorComponent
    ],
    
    imports: [
        //cuando miremos la palabra imports significa que aca adentro van SOLO MODULOS, es decir, objetos que se colocan en los imports
    
    /*Una de las caracteristicas quie nos pfrece el commoModule son distitntos tipos de modulos entre ellos directivas como el *ngIf y el *ngFor*/
    ],
    
})
export class ContadorModule{}