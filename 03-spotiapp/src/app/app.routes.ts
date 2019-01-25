import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { PaisesComponent } from './components/paises/paises.component';
import { ArtistaComponent } from './components/artista/artista.component';

export const routes: Routes = [
    { path: 'home', component : HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'paises', component: PaisesComponent },
    { path: 'artista/:id', component: ArtistaComponent },
    { path: '**', pathMatch: 'full',redirectTo: 'home' },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    
];

