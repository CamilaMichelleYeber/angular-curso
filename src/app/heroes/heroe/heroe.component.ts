//Creamos el componente:

//3.Esta importacion debería aparecer sola una vez que realizamos el paso 2, en caso de no ser así, escribir manualmente.
import { Component } from "@angular/core";


//2.Importamos el decorador que vamos a usar
@Component({
    selector: 'app-heroe', //en el selector lo que estamos creando es nuestra etiqueta para usar en nuestro .component.html (usualmente tiene el mismo nombre que el componente pero sin la palabra component)
    templateUrl: 'heroe.component.html' //mi template (plantilla) que voy a utilizar es la que tengo ya guardada y creada en mi archivo .component.html
})
//1.Creo la clase y la exporto
export class HeoreComponent{
    //creamos propiedades dentro de nuestro componente
    /*nombre:string ='Ironman';
    edad: number=45;

    //podemos crear getters y setters
    //creamos un get
    Lo que hacemos es crear mediante codigo una propiedad que cuando yo la llame va a ser procesada, pero se va a ver como cualquier propiedad
    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }


    funcion->aca vamos a colocar el producto de un metodo
    obtenerNombre():string{
        return ` 
       Todo lo que voy a escribir aca adentro es propio de JS no de Angular
       ${this.nombre}- {this.edad};
       lo que esta arriba es lo mismo que escribir:
       this.nombre + '-' + this.edad.`
    //``->estas se llaman vactics y se usan para crear templates, es decir para constuir un string dentro
    }

    */


}


//todo esto no es suficiente para que funcione, nos falta 1 importacion, es decir, nuestro componente HeroeComponent debemos importarlo en un modulo, es decir, en el app.module.ts.
//Al ser un componente, lo vamos a colocar en las declaraciones