import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { HttpClientModule } from '@angular/common/http';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { rutas } from './app.routes';
import { PruebaComponent } from './prueba/prueba.component';



@NgModule({
  declarations: [
    AppComponent,
    BuscarComponent,
    PeliculaComponent,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
