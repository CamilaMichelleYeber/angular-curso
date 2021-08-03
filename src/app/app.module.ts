
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListadoComponent } from './heroes/listado/listado.component';
import { NgModule } from '@angular/core';
import { HeoreComponent } from './heroes/heroe/heroe.component';
import { ContadorComponent } from './contador/contador/contador.component';




@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HeoreComponent, //importamos nuestro componente HeroeComponent, y arriba vamos a ver que solo hace la autoimportancion
    ListadoComponent,//importamos nuestro componente ListadoComponent, y arriba vamos a ver que solo hace la autoimportancion
    ContadorComponent    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
