import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { PaisesComponent } from './components/paises/paises.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NoimagePipe } from './pipes/noimage.pipe';
import { TarjetsComponent } from './components/shared/tarjets/tarjets.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { ArtistaBuscadoComponent } from './components/shared/artista-buscado/artista-buscado.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    PaisesComponent,
    NoimagePipe,
    TarjetsComponent,
    LoadingComponent,
    ArtistaBuscadoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
