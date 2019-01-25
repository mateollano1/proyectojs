import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AritmeticaComponent } from './components/aritmetica/aritmetica.component';

const routes: Routes = [
  { path: '', redirectTo: '/aritmetica', pathMatch: 'full' },
  { path: 'aritmetica', component: AritmeticaComponent }

];
export const rutas = RouterModule.forRoot(routes);
