
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
//import { ListadoComponent } from './heroes/listado/listado.component';
import { NgModule } from '@angular/core';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';






@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    //en las impoprtaciones siempre van los MODULOS
    BrowserModule,
    HeroesModule, //importamos nuestro componente HeroeComponent, y arriba vamos a ver que solo hace la autoimportancion
    ContadorModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
