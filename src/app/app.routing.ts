import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MainComponent } from './components/main/main.component';
import { TechtransferComponent } from './components/techtransfer/techtransfer.component';
import { ErrorComponent } from './components/error/error.component';


const appRoutes: Routes=[
    {path:'', component: MainComponent},
    {path:'patents', component: TechtransferComponent},
    {path:'**', component:ErrorComponent}
];


//Exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);