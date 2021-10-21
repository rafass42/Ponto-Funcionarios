import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PontoSaidaPage } from './ponto-saida.page';

const routes: Routes = [
  {
    path: '',
    component: PontoSaidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PontoSaidaPageRoutingModule {}
