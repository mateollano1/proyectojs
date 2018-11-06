import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: '',
    redirectTo: '/heroes',
    pathMatch: 'full' },
    // { path: 'path', component: FeatureComponent },
    // { path: '**', component: PageNotFoundComponent },
];

export const rutas = RouterModule.forRoot(routes);
