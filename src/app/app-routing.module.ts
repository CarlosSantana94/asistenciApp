import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'cumple',
    pathMatch: 'full'
  },
  {
    path: 'listado',
    loadChildren: () => import('./listado/listado.module').then( m => m.ListadoPageModule)
  },
  {
    path: 'cumple',
    loadChildren: () => import('./cumple/cumple.module').then( m => m.CumplePageModule)
  },
  {
    path: 'listado-cumple',
    loadChildren: () => import('./listado-cumple/listado-cumple.module').then( m => m.ListadoCumplePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
