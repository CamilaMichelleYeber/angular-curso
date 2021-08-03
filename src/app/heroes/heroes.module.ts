import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeoreComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';




@NgModule({
    declarations:[
        //en las declaraciones va todo lo que son mis componentes
        HeoreComponent,
        ListadoComponent
    ],
    
    exports :[
      //aca irá lo que yo quiero que sea visible/publicas fuera de este modulo
      ListadoComponent 
    ],
    
    imports: [
        //cuando miremos la palabra imports significa que aca adentro van SOLO MODULOS, es decir, objetos que se colocan en los imports
    CommonModule
    /*Una de las caracteristicas quie nos pfrece el commoModule son distitntos tipos de modulos entre ellos directivas como el *ngIf y el *ngFor*/
    ],
    
})
export class HeroesModule{}