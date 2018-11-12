import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './components/buscar/buscar.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

const routes: Routes = [
    { path: 'buscar', component: BuscarComponent },
    { path: 'pelicula/:pel', component: PeliculaComponent },
    {path: '**',
    pathMatch: 'full',
    redirectTo: 'buscar'
     }
    // { path: '**', component: PageNotFoundComponent },
];

export const rutas = RouterModule.forRoot(routes);
