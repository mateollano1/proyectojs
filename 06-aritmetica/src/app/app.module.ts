import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AritmeticaComponent } from './components/aritmetica/aritmetica.component';
import { rutas } from './app-routing.module';
import { OperacionesComponent } from './components/operaciones/operaciones.component';
import { VectorComponent } from './components/vector/vector.component';

@NgModule({
  declarations: [
    AppComponent,
    AritmeticaComponent,
    OperacionesComponent,
    VectorComponent
  ],
  imports: [
    BrowserModule,
    rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
