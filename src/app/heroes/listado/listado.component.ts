import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

export class ListadoComponent {
  /*voy a definir adentro de mi componente un arreglo[] de heroes */
      heroe   :     string[]             =['Harry', 'Kevin', 'Axl', 'Mick'];
  //  heroe   es un arreglo de strings        aca se ve el array de strings
  heroeBorrado: string = '';

  // constructor() {
  //   console.log('constructor');
  //  }

  // ngOnInit(): void {
  //   console.log('ngOnInit');
  // }

  borrarHeroe(){
   
    //utilizar funcion para borrar algun dato del array
    const heroeBorrado= this.heroe.shift();
    this.heroeBorrado = heroeBorrado || '';
    console.log('borrando...', heroeBorrado);
  }

}
