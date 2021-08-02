import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { ListadoComponent } from './heroes/listado/listado.component';
import { ContadorComponent } from './contador/contador.component';
import { HeoreComponent } from './heroes/heroe/heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    HeoreComponent, //importamos nuestro componente HeroeComponent, y arriba vamos a ver que solo hace la autoimportancion
    ListadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
