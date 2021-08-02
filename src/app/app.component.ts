import { Component } from '@angular/core'; //importacion del decorador componente que viene de angular core
/*Este decorador en general tiene varias propiedades como ser 
1. un selector
2.Template
3.styles */

//los decoradores piden un argumento y como argumento piden un objeto por lo que se coloca dentro de los parentesis (), llaves {}
@Component({ //el decorador componente tiene varias propiedades internas
  //en este caso le estamos pasando dos argumentos (propiedades)
  selector: 'app-root',//este es el nombre de este componente por lo que despues la etiqueta der html se llamara de la misma forma
  /*tenemos que espefecificarle al componente si tiene una contraparte de html, 
  es por eso que cuando existe un archivo html colocamos su path (ruta) y usamos 
  el templateURL, en caso de que solo sea un poco de html usamos template solo*/
  templateUrl: './app.component.html',
  //ejemplo con template comun
  /*template = 'comillas simples para un string de una linea'
  `vatics para escribir en varias lineas`*/
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
/*
-pasos 1 y 2 html
  //aca van mis variables  
public          title:         string=bases; mi app-root estaria mostrando este componente
tipo de clase    nomb.clase     tipo de dato
numero: number= 10;

-paso 3 html
vamos a cambiar nuestro codigo para que sea mas facil de leer en la parte del template
Nosotros podriamos crearnos en el archivo de ts (o sea este) un METODO
Este metodo se va a llamar sumar():
sumar(){ //lo que yo quiero que haga este metodo es sumar
  this.numero+=1;
  //lo que yo hago con el this.numero es hacer referencia a la propiedad de la clase
  lo que nosotros tenemos en pantalla es una instancia del app component, por consecuencia,
  necesito apuntar a esta instancia en partocular (por eso el this).mivariable(en este caso numero)
  mando a llamar mi metodo sumar en mi html
  
  Lo mismo hacemos con restar
  restar(){ //lo que yo quiero que haga este metodo es restar
  this.numero-=1;

  Sería mas facil que yo tuviera en ves de dos metodos, uno solo que hiciera ambas cosas: sumar y restar
  acumular(valor:number){ //le pasamos un parametro, el cual sera el que ire incrementando
    this.numero+= valor; //normalmente el parametro que pasaremos es +1 y -1 en html
  de esta forma ocupariamos solamente un metodo en nuestra clase
  }



}
*/
}


/*DATO: normalmente se busca que toda la parte de logica se encuentre en el archivo
de ts no en el de html */

