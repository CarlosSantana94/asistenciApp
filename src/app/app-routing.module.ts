import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
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
  {
    path: 'confirmacion-cumple',
    loadChildren: () => import('./confirmacion-cumple/confirmacion-cumple.module').then( m => m.ConfirmacionCumplePageModule)
  },
  {
    path: 'confirmacion-posadimms',
    loadChildren: () => import('./confirmacion-posadimms/confirmacion-posadimms.module').then( m => m.ConfirmacionPosadimmsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
