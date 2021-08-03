/*vamos a ocupar un decorador para tranformar esta simple clase
en un componente propio de angular */
//esto lo hago importandolo-> forma corta imp+tab
//cambiamos a @angular/core
//cambiamos el moduleName por {Component}
import {Component} from '@angular/core';

//colocamos el decorador aca
@Component({
  //necesitamos un selector
  selector:'app-contador', /*aca va lo que queramos, normalmente
  el app va para especificar que es personalizado, algo que nosotros
  hicimos*/
  //ponemos el tamplate
  template: `
    <!--Todo el contenido html que vqmos a colocar aca adentro
    va a ser todo el contenido que tenemos en el app.component.html
    -->


    <h1>HOLA MUNDO</h1>
    <h2>Probando</h2>
 
    <h3>La base es: {{ base }}</h3>
    <!--La base tiene que ser la propiedad que yo tengo en mi
    componente-->

    <button (click)="acumulador(base)">+{{ base }}</button>

    <span>{{numero}}</span>

    <button (click)="acumulador(- base)">-{{ base }}</button>
  `

})

export class ContadorComponent{
  title : string = 'bases';
  numero:number = 10;
   base :number=5;

  //creamos un metodo -> acumulador
  acumulador(valor:number){
  this.numero+=valor;/*este (por el componente) numero (por
    la variable que cree), lo que tiene que hacer es incrementar
    o decrementar su valor en base al valor que le pase.*/
    
  }

} 
/*va con export adelante xq la quiero usar en otros lugares
fuera de este archivo*/