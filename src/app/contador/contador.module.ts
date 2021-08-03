//para entender un poco paso a paso 
//1. importamos algo que viene de @angular/core->en este caso el {NgModule}
import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';


//3.Usamos el decorador de nuestro NgModule
@NgModule({
    declarations:[
    //en las declaraciones va todo lo que son mis COMPONENTES
    ContadorComponent
    ],
    
    exports :[
      //aca irá lo que yo quiero que sea visible/publicas fuera de este modulo pero con el nombre de COMPONENTES tambien
    ContadorComponent
    ],
    
    imports: [
    //cuando miremos la palabra imports significa que aca adentro van SOLO MODULOS, es decir, objetos que se colocan en los imports
    
    /*Una de las caracteristicas quie nos pfrece el commoModule son distitntos tipos de modulos entre ellos directivas como el *ngIf y el *ngFor*/
    ],
    
})

//2. Creamos una clase que luego vamos a exportar con el nombre que lleva un MODULE, es decir ContadorModule (en este caso)
export class ContadorModule{}