import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PontoEntradaPage } from './ponto-entrada.page';

const routes: Routes = [
  {
    path: '',
    component: PontoEntradaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PontoEntradaPageRoutingModule {}
