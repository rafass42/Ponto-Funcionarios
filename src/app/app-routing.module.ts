import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  {
    path: 'infoFunc',
    loadChildren: () => import('./pages/info-func/info-func.module').then( m => m.InfoFuncPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./pages/cadastro-func/page-details.module').then( m => m.PageDetailsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'details',
    loadChildren: () => import('./pages/cadastro-func/page-details.module').then( m => m.PageDetailsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'ponto-entrada',
    loadChildren: () => import('./pages/ponto-entrada/ponto-entrada.module').then( m => m.PontoEntradaPageModule)
  },
  {
    path: 'ponto-saida',
    loadChildren: () => import('./pages/ponto-saida/ponto-saida.module').then( m => m.PontoSaidaPageModule)
  },
  
  {
    path: 'start',
    loadChildren: () => import('./start/start.module').then( m => m.StartPageModule)
  },
  {
    path: 'info-func',
    loadChildren: () => import('./pages/info-func/info-func.module').then( m => m.InfoFuncPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
